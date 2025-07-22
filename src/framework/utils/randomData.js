import { faker } from '@faker-js/faker';


const generateRandomUserData = () => {
	return {
		firstName: faker.person.firstName(),
		middleName: faker.person.middleName(),
		employeeId: faker.string.numeric({ length: 4 }),
		lastName: faker.person.lastName(),
		email: faker.internet.email(),
		username: faker.internet.username(),
		password: faker.internet.password({
			length: 10,
			memorable: false,
			pattern: /[A-Za-z0-9!@#$%^&*()]/,
			prefix: '!Aa1'
		}),
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

export { generateRandomUserData};
