import { BaseEntity } from './base.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BookingEntity } from './booking.entity';
import { BOOKING_CONTRACT_STATUS } from '../util/constant';
import { CalendarEntity } from './calendar.entity';

@Entity({ name: 'booking_contract' })
export class BookingContractEntity extends BaseEntity {
  @Column('int', {
    array: true,
    default: {},
    name: 'music_genre',
    nullable: true,
  })
  musicGenre: number[];

  @Column({
    type: 'timestamp',
    name: 'start_time',
    nullable: true,
  })
  startTime: Date;

  @Column({ type: 'timestamp', name: 'end_time', nullable: true })
  endTime: Date;

  @Column({
    type: 'decimal',
    name: 'booking_price',
    default: 0,
    precision: 15,
    scale: 2,
  })
  bookingPrice: number;

  @Column({
    name: 'organisation_number',
    type: 'text',
    nullable: true,
  })
  organisationNumber: string;
  @Column({
    type: 'bool',
    name: 'is_one_sided_ticket_sale',
    nullable:true,
  })
  isOneSidedTicketSale: boolean;
  @Column({
    name: 'event_name',
    type: 'text',
    nullable: true,
  })
  eventName: string;

  @Column({
    type: 'decimal',
    name: 'ticket_price',
    default: 0,
    precision: 15,
    scale: 2,
  })
  ticketPrice: number;
  
  @Column({
    type: 'decimal',
    name: 'ticket_price2',
    default: 0,
    precision: 15,
    scale: 2,
  })
  ticketPrice2: number;
  @Column({
    type: 'decimal',
    name: 'ticket_price3',
    default: 0,
    precision: 15,
    scale: 2,
  })
  ticketPrice3: number;
  @Column({
    type: 'text',
    name: 'release_name',
   nullable: true,
  })  
  releaseName: string;
  @Column({
    type: 'text',
    name: 'release_name2',
   nullable: true,
  })  
  releaseName2: string;
  @Column({
    type: 'text',
    name: 'release_name3',
   nullable: true,
  })  
  releaseName3: string;

@Column({
    type: 'decimal',
    name: 'ticket_quantity',
    default: 0,
    precision: 15,
    scale: 2,
  })
  ticketQuantity: number;

  @Column({
    type: 'decimal',
    name: 'ticket_quantity2',
    default: 0,
    precision: 15,
    scale: 2,
  })
  ticketQuantity2: number;

  @Column({
    type: 'decimal',
    name: 'ticket_quantity3',
    default: 0,
    precision: 15,
    scale: 2,
  })
  ticketQuantity3: number;

  @Column({ type: 'timestamp', name: 'ticket_end_date', nullable: true })
  endDate: Date;

  @Column({ type: 'timestamp', name: 'ticket_end_date2', nullable: true })
  endDate2: Date;

  @Column({ type: 'timestamp', name: 'ticket_end_date3', nullable: true })
  endDate3: Date;
  
  @Column({
    type: 'text',
    name: 'contract_details',
   nullable: true,
  })  
  contractDetails: string;

  @Column({
    type: 'text',
    name: 'contract_discription',
   nullable: true,
  })
  contractDiscription: string;

  @Column({
    type: 'bool',
    name: 'ticket_sale_agreement',
   nullable:true
  })
  ticketSaleAgreement: boolean;
  @Column({
    type: 'bool',
    name: 'is_multiple_release',
   nullable:true
  })
  isMultipleRelease: boolean;
  @Column({
    name: 'equipment',
    type: 'text',
    nullable: true,
    array: true,
    default: {},
  })
  equipment: string[];

  @Column({
    name: 'contract_status',
    type: 'enum',
    enum: BOOKING_CONTRACT_STATUS,
    default: BOOKING_CONTRACT_STATUS.PENDING,
  })
  contractStatus: BOOKING_CONTRACT_STATUS;

  @OneToOne(() => BookingEntity)
  @JoinColumn({ name: 'booking_id' })
  booking: BookingEntity;

  @OneToMany(() => CalendarEntity, (c) => c.booking_contract)
  calendar: CalendarEntity;

  
}
