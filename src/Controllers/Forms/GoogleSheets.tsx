// eslint-disable-next-line
import React from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';

/***
 * TODO:
 * Currently returning a boolean, 
 * should really return an object of infomation.
 */

function GoogleSheets( data:any, SPREADSHEET_ID:string, SHEET_ID:string ): boolean {

    const CLIENTEMAIL:string = process.env.REACT_APP_G_USR!;
    const CLIENTKEY:string = process.env.REACT_APP_G_KEY!;
    
    const doc = new GoogleSpreadsheet( SPREADSHEET_ID );

    if( data.Name.length <= 0 || data.Email.length <= 0 ){
      return false;
    }

    const appendSpreadsheet = async (row:any) => {
        try {
          await doc.useServiceAccountAuth({
            client_email: CLIENTEMAIL,
            private_key: CLIENTKEY.replace(/\\n/g, '\n'),
          });
          await doc.loadInfo();
      
          const sheet = doc.sheetsById[ SHEET_ID ];
          await sheet.addRow(data);
          return true;
        } catch (e) {
          console.error('Error: ', e);
          return false;
        }

    };
    
    if( CLIENTEMAIL !== 'null' && CLIENTKEY !== 'null' && appendSpreadsheet(data) ){
        return true;    
    }
    return false;
}

export default GoogleSheets;