import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/request/create-booking.dto';
import { StandardResponse } from '../common/dto/standard-response';
import SUCCESS_MESSAGES from '../util/success-messages';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Usr } from '../auth/user.decorator';
import { AuthUser } from '../auth/auth-user';
import { SubmitBookingRequestDto } from './dto/request/submit-booking-request.dto';
import { CreateContractDto } from './dto/request/create-contract.dto';
import { SubmitBookingContractRequestDto } from './dto/request/submit-booking-contract-request.dto';
import { ContractUpdateDto } from './dto/request/contract-update.dto';
import { CreateEventDto } from './dto/request/create-event.dto';
import { use } from 'passport';

@ApiTags('booking')
@UseGuards(JwtAuthGuard)
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation({
    summary: 'Create new booking',
  })
  @ApiBody({ type: CreateBookingDto })
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Return success',
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(
    @Usr() user: AuthUser,
    @Body() createBookingDto: CreateBookingDto,
  ) {
    try {
      return new StandardResponse(
        HttpStatus.CREATED,
        SUCCESS_MESSAGES.SUCCESS,
        await this.bookingService.create(user, createBookingDto),
      );
    } catch (e) {
      throw e;
    }
  }
  @ApiOperation({
    summary: 'Get all booking',
  })
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Return list',
  })
  @ApiQuery({
    name: 'type',
    required: false,
    type: String,
    example: ['sent', 'approved', 'received'],
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(
    @Usr() user: AuthUser,
    @Query('type') type: string,
    @Query('page') page = '1',
    @Query('limit') limit = '10',
  ) {
    try {
      return new StandardResponse(
        HttpStatus.OK,
        SUCCESS_MESSAGES.SUCCESS,
        await this.bookingService.findAll(user, type, page, limit),
      );
    } catch (e) {
      throw e;
    }
  }

  @ApiOperation({
    summary: 'Get all booking order',
  })
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Return list',
  })
  @ApiQuery({
    name: 'type',
    required: false,
    type: String,
    example: ['upcoming', 'past'],
  })
  @HttpCode(HttpStatus.OK)
  @Get('order')
  async bookingOrder(
    @Usr() user: AuthUser,
    @Query('type') type: string,
    @Query('page') page = '1',
    @Query('limit') limit = '10',
  ) {
    try {
      return new StandardResponse(
        HttpStatus.OK,
        SUCCESS_MESSAGES.SUCCESS,
        await this.bookingService.bookingOrder(user, type, page, limit),
      );
    } catch (e) {
      throw e;
    }
  }



  @ApiOperation({
    summary: 'Get all booking',
  })
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Return list',
  })
  @HttpCode(HttpStatus.OK)
  @Get("findAllUpComming")
  async findAllUpcomming(
    @Usr() user: AuthUser,
    @Query('type') type: string,
    @Query('id') id: number,
    @Query('page') page = '1',
    @Query('limit') limit = '10',
  ) {
    try {
      return new StandardResponse(
        HttpStatus.OK,
        SUCCESS_MESSAGES.SUCCESS,
        await this.bookingService.findAllUpComming(user, id ,page, limit),
      );
    } catch (e) {
      throw e;
    }
  }



  @ApiOperation({
    summary: 'Accept of decline booking request',
  })
  @ApiBody({ type: SubmitBookingRequestDto })
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Return success',
  })
  @HttpCode(HttpStatus.OK)
  @Post('status')
  async status(@Usr() user: AuthUser, @Body() dto: SubmitBookingRequestDto) {
    try {
      return new StandardResponse(
        HttpStatus.OK,
        SUCCESS_MESSAGES.SUCCESS,
        await this.bookingService.status(user, dto),
      );
    } catch (e) {
      throw e;
    }
  }

  @ApiOperation({
    summary: 'Create new Contract',
  })
  @ApiBody({ type: CreateContractDto })
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Return success',
  })
  @HttpCode(HttpStatus.CREATED)
  @Post('contract')
  async createContract(@Usr() user: AuthUser, @Body() dto: CreateContractDto) {
    try {
      return new StandardResponse(
        HttpStatus.CREATED,
        SUCCESS_MESSAGES.SUCCESS,
        await this.bookingService.createContract(user, dto),
      );
    } catch (e) {
      throw e;
    }
  }
  @Post('createOneSidedGig')
  async createOneSidedGig(
    @Usr() user: AuthUser,
    @Body() createEventDto: CreateEventDto,
  ) {
    try {
      return new StandardResponse(
        HttpStatus.CREATED,
        SUCCESS_MESSAGES.SUCCESS,
        await this.bookingService.createOneSidedGig(user, createEventDto),
      );
    } catch (e) {
      throw e;
    }
  }
  @Put('updateOneSidedGig')
  async updateOneSidedGig(
    @Usr() user: AuthUser,
    @Body() createEventDto: CreateEventDto,
  ) {
    try {
      return new StandardResponse(
        HttpStatus.CREATED,
        SUCCESS_MESSAGES.SUCCESS,
        await this.bookingService.updateOneSidedGig(user, createEventDto),
      );
    } catch (e) {
      throw e;
    }
  }
  @Get('getEventById')
  async getEventById(@Usr() user: AuthUser,@Query('id') id: number) {
    // Call the service to get the event by ID
    try {
      return new StandardResponse(
        HttpStatus.CREATED,
        SUCCESS_MESSAGES.SUCCESS,
        await this.bookingService.getEventById(id),
      );
    } catch (e) {
      throw e;
    }
  }
  /*
  @Get('getUpcommingEvents')
  async getUpcommingEvents(@Usr() user: AuthUser) {
    // Call the service to get the event by ID
    try {
      return new StandardResponse(
        HttpStatus.CREATED,
        SUCCESS_MESSAGES.SUCCESS,
        await this.bookingService.getUpcommingEvents(user),
      );
    } catch (e) {
      throw e;
    }
  }
  */
  @Put('updateContract')
  async updateContract(@Usr() user: AuthUser ,@Body() updateDto: ContractUpdateDto) {
    try {
      return new StandardResponse(
        HttpStatus.CREATED,
        SUCCESS_MESSAGES.SUCCESS,
        await this.bookingService.updateContract(user, updateDto),
      );
    } catch (e) {
      throw e;
    
    }}
  @ApiOperation({
    summary: 'Accept of decline booking contract request',
  })
  @ApiBody({ type: SubmitBookingContractRequestDto })
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Return success',
  })
  @HttpCode(HttpStatus.OK)
  @Put('contract/status')
  async contractStatus(
    @Usr() user: AuthUser,
    @Body() dto: SubmitBookingContractRequestDto,
  ) {
    try {
      return new StandardResponse(
        HttpStatus.OK,
        SUCCESS_MESSAGES.SUCCESS,
        await this.bookingService.contractStatus(user, dto),
      );
    } catch (e) {
      throw e;
    }
  }
}
