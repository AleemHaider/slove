
import { isArray } from 'radash';
import { UserEntity } from '../../../entity/user.entity';

export class EventListDto {
  getSentList(
    data: any,
    count: number,
    page: number,
    limit: number,
    userId: number,
    type: string,
  ) {
    let list = [];


      list = this.getUpcommingEvents(data, type, userId);
   
    const totalPages = Math.ceil(count / limit);
    return {
      data: list,
      meta: {
        // = (int)Math.Ceiling((float)_collection.Count / (float)_itemsPerPage);
        itemsPerPage: limit,
        totalItems: Number(count),
        currentPage: page,
        nextPage: page + 1 > totalPages ? null : page + 1,
        totalPages: totalPages,
      },
    };
  }
  private getUpcommingEvents(data: any, type: string, userId: number) {
    const list = [];
    if (isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        const element = data[i] as any;
        const obj = {
          userId: element.user_id,
          id: element.id,
          message: element.message,
          maximumPrice: element.maximum_price,
          minimumPrice: element.minimum_price,
          bookingStatus: element.booking_status,
          isFeedbackGiven: !!element.feedback_id,
          eventId: element.event_id,
          genreType:element.genre_type,
          startTime:element.start_time,
          endTime:element.end_time,
          bookingPrice:element.booking_price,
          organisationNumber:element.organisation_number,
          eventName:element.event_name,
          ticketPrice:element.ticket_price,
          ticketPrice2:element.ticket_price2,
          ticketPrice3:element.ticket_price3,
          ticketQuantity:element.ticket_quantity,
          ticketQuantity2:element.ticket_quantity2,
          ticketQuantity3:element.ticket_quantity3,
          releaseName:element.release_name,
          releaseName2:element.release_name2,
          releaseName3:element.release_name3,
          endDate:element.end_date,
          endDate2:element.end_date2,
          endDate3:element.end_date3,
          linkToTickets:element.link_to_tickets,
          location:element.location,
          linkToEvent:element.link_to_event,
          ticketSaleAgreement:element.ticket_sale_agreement,
          contractDetails:element.contract_details,
          contractDiscription:element.contract_discription,
          equipment:element.equipment,
          musicGenre: element.music_genre,
          artist:element.artist_id,
          venue:element.venue_id,
          contract: element.booking_contract_id
            ? this.getContract(element)
            : null,
        };
        list.push(obj);
      }
    }
    return list;
  }
  private getContract(element: any) {
    return {
      id: element.booking_contract_id,
      musicGenre: element.booking_contract_music_genre
        ? element.booking_contract_music_genre
        : null,
      startTime: element.booking_contract_start_time,
      endTime: element.booking_contract_end_time,
      bookingPrice: element.booking_contract_booking_price,
      equipment: element.booking_contract_equipment,
      eventName: element.booking_contract_event_name,
      organisationNumber: element.booking_contract_organisation_number,
      ticketPrice: element.booking_contract_ticket_price,
      ticketPrice2: element.booking_contract_ticket_price2,
      ticketPrice3: element.booking_contract_ticket_price3,
      releaseName:element.booking_contract_ticket_release_name,
      releaseName2:element.booking_contract_ticket_release_name2,
      releaseName3:element.booking_contract_ticket_release_name3,
      ticketQuantity:element.booking_contract_ticket_quantity,
      ticketQuantity2:element.booking_contract_ticket_quantity2,
      ticketQuantity3:element.booking_contract_ticket_quantity3,
      endDate:element.booking_contract_ticket_end_date,
      endDate2:element.booking_contract_ticket_end_date2,
      endDate3:element.booking_contract_ticket_end_date3,
      isTicketClose: element.booking_contract_is_ticket_close,
      contractDetails: element.booking_contract_details,
      contractDiscription:element.booking_contract_discription,
      ticketSaleAgreement: element.booking_contract_ticket_sale_agreement,
    };
  }
}
