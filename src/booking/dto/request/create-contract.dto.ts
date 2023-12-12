import { ApiProperty } from '@nestjs/swagger';
import { Matches } from 'class-validator';
export class CreateContractDto {
  @ApiProperty({ description: 'booking id' })
  id: number;
  @ApiProperty()
  genreType: number[];

  @Matches(/^\s*([01][0-9]|2[0-3]):[0-5][0-9]\s*$/, {
    message: 'Start time must be in HH:mm format',
  })
  startTime: string;
  @ApiProperty({
    examples: ['22:22'],
    description: 'Start time of the event',
  })
  @Matches(/^\s*([01][0-9]|2[0-3]):[0-5][0-9]\s*$/, {
    message: 'End time must be in HH:mm format',
  })
  endTime: string;

  @ApiProperty({
    examples: ['2023-01-23'],
    description: 'Date',
  })
  date: string;

  @ApiProperty()
  bookingPrice: number;

  @ApiProperty()
  organisationNumber: string;

  @ApiProperty()
  eventName: string;

  @ApiProperty()
  ticketPrice: number;
  
  @ApiProperty()
  ticketPrice2: number;
  @ApiProperty()
  ticketPrice3: number;

  @ApiProperty()
  ticketQuantity: number;
  @ApiProperty()
  ticketQuantity2: number;
  @ApiProperty()
  ticketQuantity3: number;

  @ApiProperty()
  releaseName: string;
  @ApiProperty()
  releaseName2: string;
  @ApiProperty()
  releaseName3: string;

  @ApiProperty({
    examples: ['2023-01-23'],
    description: 'Date',
  })
  endDate: string;
  @ApiProperty({
    examples: ['2023-01-23'],
    description: 'Date',
  })
  endDate2: string;
  @ApiProperty({
    examples: ['2023-01-23'],
    description: 'Date',
  })
  endDate3: string;

  @ApiProperty()
  ticketSaleAgreement: boolean;
  @ApiProperty()
  isMultipleRelease: boolean;
  @ApiProperty()
  contractDetails: string;
  @ApiProperty()
  contractDiscription: string;
  @ApiProperty()
  equipment: string[];
  @ApiProperty()
  isTicketClose: boolean;
  

}
