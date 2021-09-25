import React, { useState } from 'react';
import Rating from '../RaitingComponent/Rating';
import { v1 } from 'uuid';
import { initUserType } from '../../Store/Reducer_User';
import { Donor } from './Donor/Donor';
import { DonorFinance } from './DonorFinance/DonorFinance';
import { Donorcontact } from './DonorContact/Donorcontact';
import { DonorEvent } from './DonorEvent/DonorEvent';

export const DonorForm = () => {

		let [ name, setName ] = useState('');
		let [ radio, setRadio ] = useState('event');
		let [ formaEnter, setFormaEnter ] = useState(false);
		let [ formaContact, setFormaContact ] = useState(false);
		let [ users, setUser ] = useState<initUserType>([]);

		// }

		return (
			<div>
				{ formaEnter ||
                <Donor name={ name } setName={ setName } radio={ radio } setRadio={ setRadio } formaEnter={ formaEnter }
                       setFormaEnter={ setFormaEnter } /> }
				{ <Donorcontact /> }
				{ <DonorEvent /> }
				{ <DonorFinance /> }
				<Rating />
			</div>
		);
	}
;

