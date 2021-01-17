# Routes

## Restaurants
| Route | HTTP verb | Action |
| :- | :- | :- |
| /api/v1/restaurants | GET | Return all restaurants |
| /api/v1/restaurants/:id | GET | Return single restaurant |
| /api/v1/restaurants/ | POST | Add restaurant |
| /api/v1/restaurants/:id | PUT | Update restaurant |
| /api/v1/restaurants/:id | DELETE | Remove restaurant |

## Couriers
| Route | HTTP verb | Action |
| :- | :- | :- |
| /api/v1/couriers | GET | Return all couriers |
| /api/v1/couriers/:id | GET | Return a single couriers |
| /api/v1/couriers/:id/orders | GET | Return courier active orders |
| /api/v1/couriers/ | POST | Add a courier |
| /api/v1/couriers/:id | PUT | Update a courier |
| /api/v1/couriers/:id | DELETE | Remove a courier |

## Courier statistics
| Route | HTTP verb | Action |
| :- | :- | :- |
| /api/v1/couriers/:id/statistics/addresses | GET | Return list of top addresses |
| /api/v1/couriers/:id/statistics/orders | GET | Return completed orders count |
| /api/v1/couriers/:id/statistics/deliverytime | GET | Return average delivery time |
| /api/v1/couriers/:id/statistics/totalprise | GET | Return total price of completed orders |

## Customers
| Route | HTTP verb | Action |
| :- | :- | :- |
| /api/v1/customers | GET | Return all customers |
| /api/v1/customers/:id | GET | Return single customers |
| /api/v1/customers/ | POST | Add customer |
| /api/v1/customers/:id | PUT | Update customer |
| /api/v1/customers/:id | DELETE | Remove customer |

## Orders
| Route | HTTP verb | Action |
| :- | :- | :- |
| /api/v1/orders | GET | Return all orders |
| /api/v1/orders/:id | GET | Return a single order |
| /api/v1/orders | POST | Create order |
| /api/v1/orders/:id/done | PUT | To complete order |