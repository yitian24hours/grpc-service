import { Controller } from '@nestjs/common';
import { DemoService } from './demo.service';
import { GetDemaciaHeroByIdDto } from './dto/getDemaciaHeroById.dto';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class DemoController {
  constructor(private readonly demoService: DemoService) {}
  @GrpcMethod('GrpcDemoService', 'GetDemaciaHeroById')
  getDemaciaHeroById(DTO: GetDemaciaHeroByIdDto) {
    return this.demoService.getDemaciaHeroById(DTO);
  }
}
