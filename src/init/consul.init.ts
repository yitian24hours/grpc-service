import * as Consul from 'consul';

//初始化consul,用作服务注册
export const consul = new Consul({
  host: 'localhost',
  port: 8500,
  promisify: true,
});

export async function registerService() {
  try {
    await consul.agent.service.register({
      id: 'microservice-demo-service-group',
      name: 'microservice-demo-service-group',
      address: 'localhost',
      port: 8081,
      tags: ['microservice-demo-service-group'],
      meta: { weight: '1', port: '8082' },
      check: {
        http: 'http://localhost:8081/health',
        interval: '10s',
      },
    });
    console.log('Service registered successfully with Consul');
  } catch (err) {
    console.error('Error registering service with Consul', err);
  }
}

export async function deregisterService() {
  try {
    await consul.agent.service.deregister('my-service-id');
    console.log('Service deregistered successfully with Consul');
  } catch (err) {
    console.error('Error deregistering service with Consul', err);
  }
}
