import appTest from './app';
import { couriersTest, couriersDeleteTest } from './couriers';
import ordersTest from './orders';
import { customersTest, customersDeleteTest } from './customers';
import { restaurantsTest, restaurantsDeleteTest } from './restaurants';

export let courier: any;

export let customer: any;

export let restaurant: any;

describe('App Test', appTest)
describe('Couriers Test', couriersTest)
describe('Customers Test', customersTest)
describe('Restaurants Test', restaurantsTest)
describe('Orders Test', ordersTest)
describe('Couriers Delete Test', couriersDeleteTest)
describe('Customers Delete Test', customersDeleteTest)
describe('Restaurants Delete Test', restaurantsDeleteTest)