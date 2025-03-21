import getData from "./lib/service.js";
import axios from 'axios';

(async () => {
try{
    const users = await getData(1); // 1. kullanıcıyı getirir
    
    console.log(users); // yazdır
    console.log(posts); // yazdır
} // gizli anonim bir fonksiyon oluşturduk ve içine async await yazdık.
catch(err) {
    console.log(err); // hata varsa yazdır
}
})();