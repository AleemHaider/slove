import { isArray } from 'radash';
import { UserEntity } from '../../../entity/user.entity';
import { GIG_TYPE } from 'src/util/constant';

export class BookingListDto {
  getSentList(
    data: any,
    count: number,
    page: number,
    limit: number,
    user: UserEntity,
    type: string,
  ) {
    let list = [];

    if (type == 'approved') {
      list = this.getApprovedTypeData(data, type, user);
    } else {
      list = this.getOtherTypeData(data, user);
    }

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
  private getApprovedTypeData(data: any, type: string, user: UserEntity) {
    const list = [];
    if (isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        const element = data[i] as any;
      
          const obj = {
            userId: element.user_id ,
            id: element.id ,
            chatId:
              type == 'approved' && user.id == element.requested_user_id
                ? element.chat_id
                : element.requested_chat_id,
            message: element.message,
            startTime: element.start_time,
            endTime: element.end_time,
            maximumPrice: element.maximum_price,
            minimumPrice: element.minimum_price,
            bookingStatus: element.booking_status,
            isFeedbackGiven: !!element.feedback_id,
            gigType:element.gig_type,
            eventId: element.event_id,
            profileImage:
              type == 'approved' && user.id == element.requested_user_id
                ? element.profile_image
                : element.requested_profile_image,
            creatorUserType: element.request_user_type,
            userType: element.user_type,
            contractStatus: element.contract_status ,
            country:
              type == 'approved' && user.id == element.requested_user_id
                ? element.country_name
                : element.requested_country_name,
            isBookingCreator: user.id == element.requested_user_id,
            city:
              type == 'approved' && user.id == element.requested_user_id
                ? element.city_name
                : element.requested_city_name,
            name:
              type == 'approved' && user.id == element.requested_user_id
                ? element.band_name
                  ? element.band_name
                  : element.venue_name
                : element.requested_band_name
                  ? element.requested_band_name
                  : element.requested_venue_name,
            requestedUserId: element.requested_user_id,
            musicGenre: element.music_genre
        ? element.music_genre
        : null,
            contract: element.booking_contract_id
              ? this.getContract(element)
              : null,
          };
          
          list.push(obj);
          
      
        
      
    }
    }
    return list;
  }
  private getOtherTypeData(data: any, user: UserEntity) {
    const list = [];
    if (isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        const element = data[i] as any;
        const obj = {
          userId: element.user_id,
          id: element.id,
          chatId: element.chat_id,
          message: element.message,
          startTime: element.start_time,
          endTime: element.end_time,
          maximumPrice: element.maximum_price,
          minimumPrice: element.minimum_price,
          bookingStatus: element.booking_status,
          profileImage: element.profile_image,
          creatorUserType: element.request_user_type,
          userType: element.user_type,
          contractStatus: element.contract_status,
          country: element.country_name,
          isBookingCreator: user.id == element.requested_user_id,
          city: element.city_name,
          name: element.band_name ? element.band_name : element.venue_name,
          requestedUserId: element.requested_user_id,
          musicGenre: element.music_genre,
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
      isOneSidedTicketSale:element.booking_contract_is_one_sided_ticket_sale,
      linkToTickets:element.booking_contract_link_to_tickets,
      linkToEvent:element.booking_contract_link_to_event,
      isMultipleRelease:element.booking_contract_is_multiple_release,
      contractDetails: element.booking_contract_details,
      contractDiscription:element.booking_contract_discription,
      ticketSaleAgreement: element.booking_contract_ticket_sale_agreement,
      isTicketClose:element.booking_contract_is_ticket_close,
    };
  }
}
