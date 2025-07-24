import { faker } from '@faker-js/faker';
import { readFileSync, writeFileSync } from 'fs';


const generateRandomUserData = () => {
	return {
		firstName: faker.person.firstName(),
		middleName: faker.person.middleName(),
		// employeeId: Math.floor(Math.random() * 10000).toString().padStart(4, '0'),
		employeeId: faker.string.numeric(4),
		lastName: faker.person.lastName(),
		email: faker.internet.email(),
		username: faker.internet.username(),
		password: faker.internet.password(
			10,
			false,
			/[A-Za-z0-9!@#$%^&*()]/,
			'!Aa1'
		),
		phoneNumber: faker.phone.number(),
		address: {
			street: faker.location.streetAddress(),
			city: faker.location.city(),
			state: faker.location.state(),
			country: faker.location.country(),
			zipCode: faker.location.zipCode()
		},
	};
};

const writeJSON = (data) => {
	return writeFileSync(new URL(`../../data/employeeCredentials.json`, import.meta.url), JSON.stringify(data, null, 2));
}

const readJSON = (url) => {
	const data = readFileSync(new URL(url, import.meta.url), 'utf-8');
	return JSON.parse(data);
}

export { generateRandomUserData, writeJSON, readJSON };
