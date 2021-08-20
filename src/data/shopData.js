import turquoiseBracelet from '../images/bracelet/turquoise-and-amazonite-stretch/turquoise1.jpg';
import citrineChandelierNecklace from '../images/necklace/citrine-chandelier/citrine1.jpg';
import garnetChandelierNecklace from '../images/necklace/garnet-chandelier/garnet1.jpg';
import cowrieNecklace from '../images/necklace/cowrie/cowrie1.jpg';
import myceliumNecklace from '../images/necklace/mycelium/mycelium2.jpg';
import dalmatianJasperCopper from '../images/ring/dalmatian-and-jasper-copper/jasper-copper-1.jpg';
import dalmatianJasperGold from '../images/ring/dalmatian-and-jasper-gold/gold1.jpg';
import rosewoodRing from '../images/ring/rosewood/rosewood1.jpg';
import motherOfPearlsStrand from '../images/strand/mother-of-pearls-chips/strand1.jpg';
import amazoniteStrand from '../images/strand/amazonite/amazonite1.jpg';
import dalmatianJasperStrand from '../images/strand/dalmatian-jasper/dalmatian1.jpg';
import customMala from '../images/custom-mala/custom1.jpg';
import customMala2 from '../images/custom-mala/custom2.jpg';
import customMala3 from '../images/custom-mala/custom3.jpg';
import customMala4 from '../images/custom-mala/custom4.jpg';
import customMala5 from '../images/custom-mala/custom5.jpg';
import customMala6 from '../images/custom-mala/custom6.jpg';
import customMala7 from '../images/custom-mala/custom7.jpg';

const SHOP_DATA = [
	{
		id        : 1,
		title     : 'Bracelets',
		routeName : 'bracelets',
		items     : [
			{
				id       : 1,
				name     : 'turquoise and amazonite stretch',
				imageUrl : turquoiseBracelet,
				price    : 28
			}
		]
	},
	{
		id        : 2,
		title     : 'Necklaces',
		routeName : 'necklaces',
		items     : [
			{
				id       : 2,
				name     : 'Citrine Chandelier',
				imageUrl : citrineChandelierNecklace,
				price    : 58
			},
			{
				id       : 3,
				name     : 'Garnet Chandelier',
				imageUrl : garnetChandelierNecklace,
				price    : 58
			},
			{
				id       : 4,
				name     : 'Cowrie',
				imageUrl : cowrieNecklace,
				price    : 38
			},
			{
				id       : 5,
				name     : 'Mycelium',
				imageUrl : myceliumNecklace,
				price    : 38
			}
		]
	},
	{
		id        : 3,
		title     : 'Rings',
		routeName : 'rings',
		items     : [
			{
				id       : 6,
				name     : 'Dalmatian and Jasper Copper',
				imageUrl : dalmatianJasperCopper,
				price    : 22
			},
			{
				id       : 7,
				name     : 'Dalmatian and Jasper Gold',
				imageUrl : dalmatianJasperGold,
				price    : 18
			},
			{
				id       : 8,
				name     : 'Rosewood',
				imageUrl : rosewoodRing,
				price    : 15
			}
		]
	},
	{
		id        : 4,
		title     : 'Strands',
		routeName : 'strands',
		items     : [
			{
				id       : 9,
				name     : 'Mother of Pearl Chips',
				imageUrl : motherOfPearlsStrand,
				price    : 78
			},
			{
				id       : 10,
				name     : 'Amazonite',
				imageUrl : amazoniteStrand,
				price    : 78
			},
			{
				id       : 11,
				name     : 'Dalmatian Jasper',
				imageUrl : dalmatianJasperStrand,
				price    : 88
			}
		]
	},
	{
		id        : 5,
		title     : 'Custom Mala',
		routeName : 'custom',
		items     : [
			{
				id       : 12,
				name     : 'Sample 1',
				imageUrl : customMala,
				price    : 108
			},
			{
				id       : 13,
				name     : 'Sample 2',
				imageUrl : customMala2,
				price    : 108
			},
			{
				id       : 14,
				name     : 'Sample 3',
				imageUrl : customMala3,
				price    : 108
			},
			{
				id       : 15,
				name     : 'Sample 4',
				imageUrl : customMala4,
				price    : 108
			},
			{
				id       : 16,
				name     : 'Sample 5',
				imageUrl : customMala5,
				price    : 108
			},
			{
				id       : 17,
				name     : 'Sample 6',
				imageUrl : customMala6,
				price    : 108
			},
			{
				id       : 18,
				name     : 'Sample 7',
				imageUrl : customMala7,
				price    : 108
			}
		]
	}
];

export default SHOP_DATA;
