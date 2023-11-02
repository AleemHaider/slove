import { BaseEntity } from './base.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BookingContractEntity } from './booking-contract.entity';
import { UserEntity } from './user.entity';
import { OrderEntity } from './order.entity';
import { FeedbackEntity } from './feedback.entity';

@Entity({ name: 'event' })
export class EventEntity extends BaseEntity {
  @Column({
    name: 'event_name',
    type: 'text',
    nullable: true,
  })
  eventName: string;

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

  @Column({ type: 'timestamp', name: 'ticket_endate3', nullable: true })
  endDate3: Date;
  
  @Column({
    type: 'bool',
    name: 'ticket_sale_agreement',
    nullable:true,
  })
  ticketSaleAgreement: boolean;
  @Column({
    name: 'contract_details',
    type: 'text',
    nullable: true,
  })
  contractDetails: string;
  @Column({
    name: 'contract_discription',
    type: 'text',
    nullable: true,
  })
  contractDiscription: string;

  @OneToOne(() => BookingContractEntity)
  @JoinColumn({ name: 'booking_contract_id' })
  bookingContract: BookingContractEntity;

  @ManyToOne(() => UserEntity, (user) => user.event_artist)
  @JoinColumn({ name: 'artist_id' })
  artist: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.event_venue)
  @JoinColumn({ name: 'venue_id' })
  venue: UserEntity;

  @OneToMany(() => OrderEntity, (o) => o.event)
  order: OrderEntity[];

  @OneToMany(() => FeedbackEntity, (f) => f.event)
  feedback: FeedbackEntity[];
}
