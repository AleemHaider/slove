
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
          message: element.message?element.message:null,
          maximumPrice: element.maximum_price?element.maximum_price:null,
          minimumPrice: element.minimum_price?element.minimum_price:null,
          bookingStatus: element.booking_status?element.booking_status:null,
          isFeedbackGiven: !!element.feedback_id,
          eventId: element.event_id?element.event_id:null,
          artistId: element.artist_id?element.artist_id:null,
          venueId: element.venue_id?element.venue_id:null,
          genreType:element.genre_type?element.genre_type:null,
          startTime:element.start_time?element.start_time:null,
          endTime:element.end_time?element.end_time:null,
          bookingPrice:element.booking_price?element.booking_price:null,
          organisationNumber:element.organisation_number?element.organisation_number:null,
          profileImage:
              type == 'approved' && userId == element.requested_user_id
                ? element.profile_image
                : element.requested_profile_image,
            creatorUserType: element.request_user_type,
            userType: element.user_type,
            contractStatus: element.contract_status ,
            country:
             userId == element.requested_user_id
                ? element.country_name
                : element.requested_country_name,
            isBookingCreator: userId == element.requested_user_id,
            city:
              userId == element.requested_user_id
                ? element.city_name
                : element.requested_city_name,
            name:
               userId == element.requested_user_id
                ? element.band_name
                  ? element.band_name
                  : element.venue_name
                : element.requested_band_name
                  ? element.requested_band_name
                  : element.requested_venue_name,
            requestedUserId: element.requested_user_id,
          eventName:element.event_name?element.event_name:null,
          ticketPrice:element.ticket_price?element.ticket_price:null,
          ticketPrice2:element.ticket_price2?element.ticket_price2:null,
          ticketPrice3:element.ticket_price3?element.ticket_price3:null,
          ticketQuantity:element.ticket_quantity?element.ticket_quantity:null,
          ticketQuantity2:element.ticket_quantity2?element.ticket_quantity2:null,
          ticketQuantity3:element.ticket_quantity3?element.ticket_quantity3:null,
          releaseName:element.release_name?element.release_name:null,
          releaseName2:element.release_name2?element.release_name2:null,
          releaseName3:element.release_name3?element.release_name3:null,
          endDate:element.end_date?element.end_date:null,
          endDate2:element.end_date2?element.end_date2:null,
          endDate3:element.end_date3?element.end_date3:null,
          linkToTickets:element.lbooking_contract_link_to_tickets?element.booking_contract_link_to_tickets:null,
          location:element.location?element.location:null,
          linkToEvent:element.booking_contract_link_to_event?element.booking_contract_link_to_event:null,
          ticketSaleAgreement:element.ticket_sale_agreement,
          gigType:element.gig_type,
          contractDetails:element.contract_details,
          contractDiscription:element.contract_discription,
          equipment:element.equipment?element.equipment:null,
          musicGenre: element.music_genre,
          artist:element.artist_id?element.artist_id:null,
          venue:element.venue_id?element.venue_id:null,
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
      linkToEvent:element.booking_contract_link_to_event?element.booking_contract_link_to_event:null,
      linkToTickets:element.booking_contract_link_to_tickets?element.booking_contract_link_to_tickets:null,
      isOneSidedTicketSale:element.booking_contract_is_one_sided_ticket_sale?element.booking_contract_is_one_sided_ticket_sale:null,
      isMultipleRelease: element.booking_contract_is_multiple_release?element.booking_contract_is_multiple_release:null,
    };
  }
}
