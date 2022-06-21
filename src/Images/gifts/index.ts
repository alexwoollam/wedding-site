import Clay from './clay.gif';
import BedTray from './bedtray.jpg';
import Tidy from './tidy.jpg';
import Arya from './arya.jpg';
import Pudding from './pudding.jpg';
import Shed from './shed.jpg';
import Craft from './craft.jpg';
import Glass from './glass.gif';
import Cheese from './cheese.jpg';
import Mushroom from './mushroom.jpeg';
import Mixer from './mixer.gif';
import StreetFood from './streetfood.jpg';
import Boat from './boat.jpeg';
import Indian from './indian.jpg';
import Cocktails from './cocktail.gif';
import Wine from './wine.jpg';
import Cutlery from './cutlery.jpg';
import Toy from './toy.jpg';
import BellTent from './belltent.jpeg';
import CandleStick from './candlestick.jpg';
import Chips from './chipsonbeach.jpg';
import Hockey from './hockey.gif';


export default function Images( name ) {
    switch (name) {
        case "Clay":
            return Clay;
        case "BedTray":
            return BedTray;
        case "Tidy":
            return Tidy;
        case "Arya":
            return Arya;
        case "Pudding":
            return Pudding;
        case "Shed":
            return Shed;
        case "Craft":
            return Craft;
        case "Glass":
            return Glass;
        case "Cheese":
            return Cheese;
        case "Mushroom":
            return Mushroom;
        case "Mixer":
            return Mixer;
        case "StreetFood":
            return StreetFood;
        case "Boat":
            return Boat;
        case "Indian":
            return Indian;
        case "Cocktails":
            return Cocktails;
        case "Wine":
            return Wine;
        case "Cutlery":
            return Cutlery;
        case "Toy":
            return Toy;
        case "BellTent":
            return BellTent;
        case "CandleStick":
            return CandleStick;
        case "Chips":
            return Chips;
        case "Hockey":
            return Hockey;
        default:
            return '';
    }
}
