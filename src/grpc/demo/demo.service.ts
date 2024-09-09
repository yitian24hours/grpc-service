import { Injectable } from '@nestjs/common';
import { GetDemaciaHeroByIdDto } from './dto/getDemaciaHeroById.dto';
import { DemaciaHero, HeroType } from './interface/demo.interface';
import { status } from '@grpc/grpc-js';

@Injectable()
export class DemoService {
  private readonly DemaciaHeros: DemaciaHero[] = [
    {
      id: 1,
      name: '盖伦',
      nickname: '亚瑟',
      type: HeroType.WARRIOR,
      info: {
        attack: 60,
        hp: 700,
        mp: 0,
      },
    },
    {
      id: 2,
      name: '拉克丝',
      nickname: '拉丝',
      type: HeroType.MAGE,
      info: {
        attack: 45,
        hp: 590,
        mp: 300,
      },
    },
    {
      id: 3,
      name: '赵信',
      nickname: '菊花信',
      type: HeroType.WARRIOR,
      info: {
        attack: 62,
        hp: 650,
        mp: 200,
      },
    },
    {
      id: 4,
      name: '嘉文四世',
      nickname: '皇子',
      type: HeroType.WARRIOR,
      info: {
        attack: 60,
        hp: 680,
        mp: 200,
      },
    },
    {
      id: 5,
      name: '塞拉斯',
      nickname: '蒜男',
      type: HeroType.ASSASSIN,
      info: {
        attack: 50,
        hp: 660,
        mp: 250,
      },
    },
  ];

  async getDemaciaHeroById(DTO: GetDemaciaHeroByIdDto) {
    if (DTO.id > this.DemaciaHeros.length || DTO.id <= 0) {
      const error: any = new Error('非法查询id');
      error.code = status.INVALID_ARGUMENT;
      throw error;
    }
    return this.DemaciaHeros.find((item) => item.id === DTO.id);
  }
}
