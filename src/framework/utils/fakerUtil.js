import { faker } from '@faker-js/faker';

const generateRandomUserData = async () => {
	return {
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		email: faker.internet.email(),
		username: faker.internet.userName(),
		password: faker.internet.password(),
		phoneNumber: faker.phone.number(),
		address: {
			street: faker.location.streetAddress(),
			city: faker.location.city(),
			state: faker.location.state(),
			country: faker.location.country(),
			zipCode: faker.location.zipCode()
		}
	}
}

export {generateRandomUserData}
