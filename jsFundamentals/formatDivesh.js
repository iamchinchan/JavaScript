let f1 = {
  Oct: {
    services: {
      service_1: 10,
      service_2: 15,
      service_3: 20,
    },
  },
  Sep: {
    services: {
      service_1: 20,
      service_2: 25,
      service_4: 30,
    },
  },
};
console.log("f1 is :", f1);
const serviceMap = new Map();
// console.log(f1[`Oct`][`services`]);
for (const month in f1) {
  const services = f1[`${month}`][`services`];
  for (const service in services) {
    serviceValue = services[service];
    if (!serviceMap.has(`${service}`)) {
      //if service is encountered 1st time:
      serviceMap.set(service, { [month]: serviceValue });
    } else {
      //if service is already present , just need to add month and value
      serviceMap.get(service)[month] = serviceValue;
    }
    // console.log(`${month} : ${service} : ${serviceValue}`);
  }
}
serviceMap.get(`service_1`)["allu"] = "gobhi";
console.log(serviceMap.get(`service_1`));
// let check = serviceMap.get("service_1").has("allu");
// console.log("check is: ", check);
console.log("servise 1 is: ", serviceMap.get(`service_1`));
console.log("service map is: ", serviceMap);

let f2 = [];
console.log("f2 is: ", f2);
// needed ouput

/*

const format2 = [
  {
    name: 'service1',
    Oct: 10,
    sep: 20,
  },
  {
    name: 'service2',
    Oct: 15,
    sep: 25,
  },
  {
    name: 'service3',
    Oct: 20,
  },
  {
    name: 'service4',
    Sep: 30,
  },
];

*/
