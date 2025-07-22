import { faker } from '@faker-js/faker';


const generateRandomUserData = () => {
	return {
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		email: faker.internet.email(),
		username: faker.internet.username(),
		password: faker.internet.password(),
		phoneNumber: faker.phone.number(),
		address: {
			street: faker.location.streetAddress(),
			city: faker.location.city(),
			state: faker.location.state(),
			country: faker.location.country(),
			zipCode: faker.location.zipCode()
		}
	};
};

const generateStrongPassword = (length = 12) => {
	return faker.internet.password({
		length,
		memorable: false,
		pattern: /[A-Za-z0-9!@#$%^&*()]/,
		prefix: '!Aa1'
	});
};

const randomEmpId = () => {
	const empId = faker.string.numeric({ length: 4 });
	return parseInt(empId, 10);
}

export { generateRandomUserData, generateStrongPassword, randomEmpId };
