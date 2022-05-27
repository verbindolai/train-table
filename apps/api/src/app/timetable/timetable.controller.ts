import {Controller, Get} from '@nestjs/common';

@Controller('timetable')
export class TimetableController {

  @Get()
  test() {
    return 'test';
  }

}
