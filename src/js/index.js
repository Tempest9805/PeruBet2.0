import {middleNav} from './modules/topNav';
import {tnsCarousell,tnsCarousell2, tnsSingle, tnsVertical, tnsSyncing} from "./modules/tns-slider";

// import {swDetecter} from './modules/swDetSecter';
(()=>{

	// swDetecter();
	middleNav();
	tnsCarousell();
	tnsCarousell2();
	// tnsSingle();
	// tnsVertical();
	// tnsSyncing();
	// accordion();
	if (document.body.classList.contains('home')) {
		// functions here
	}else if (document.body.classList.contains('page2')) {
		// functions here
	}else if (document.body.classList.contains('page3')) {
		// functions here
	}
	else if (document.body.classList.contains('page4')) {
		// functions here
	}
})();
