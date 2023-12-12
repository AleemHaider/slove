import { MusicGenreEntity } from '../../../entity/music-genre.entity';
import { PreferredVenueEntity } from '../../../entity/preferred-venue.entity';
import { ArtistTypeEntity } from '../../../entity/artist-type.entity';
import { UserQuestionEntity } from '../../../entity/user-question.entity';
import { UserPreferencesEntity } from '../../../entity/user-preferences.entity';
import { UserEntity } from '../../../entity/user.entity';
import { isArray } from 'radash';

export class UserDetailsDto {
  getUserDetailsById(
    userQuestion: UserQuestionEntity,
    userPreferences: UserPreferencesEntity,
    musicGenre: MusicGenreEntity[],
    preferredVenue: PreferredVenueEntity[],
    artistType: ArtistTypeEntity[],
    chatId: number,
  ) {
    const userDetails: UserProfileInterface = {
      countryCode: userQuestion.countryCode,
      phoneCode: userQuestion.phoneCode,
      audioUrl:userQuestion.audioUrl,
      countryId: userQuestion.countryId
        ? {
            id: userQuestion.countryId.id,
            name: userQuestion.countryId.name,
          }
        : null,
      cityId: userQuestion.cityId
        ? {
            id: userQuestion.cityId.id,
            name: userQuestion.cityId.name,
          }
        : null,
      chatId: chatId,
      activeTime: userQuestion.activeTime,
      additionalLinks: userQuestion.additionalLinks,
      artistType: artistType,
      averagePayPerGig: userQuestion.averagePayPerGig
        ? String(userQuestion.averagePayPerGig)
        : userQuestion.averagePayPerGig,
      bandName: userQuestion.bandName,
      bio: userQuestion.user.bio,
      bookingPrice: userQuestion.bookingPrice
        ? String(userQuestion.bookingPrice)
        : userQuestion.bookingPrice,
      city: userQuestion.city,
      country: userQuestion.country,
      email: userQuestion.user.email,
      facebook: userQuestion.facebook,
      followerCount: userQuestion.followerCount,
      genreType: musicGenre,
      gigs: userQuestion.gigs,
      instagram: userQuestion.instagram,
      livePerformancePerMonth: userQuestion.livePerformancePerMonth,
      mobilePhone: userQuestion.mobilePhone,
      musicianExposure: userQuestion.musicianExposure
        ? String(userQuestion.musicianExposure)
        : userQuestion.musicianExposure,
      organizationName: userQuestion.organizationName,
      peakSeason: userQuestion.peakSeason,
      profileImage: userQuestion.user.profileImage,
      rating: userQuestion.rating ? String(userQuestion.rating) : null,
      socialMediaFollowers: userQuestion.socialMediaFollowers,
      socialMediaLink: userQuestion.socialMediaLink,
      spotify: userQuestion.spotify,
      streetName: userQuestion.streetName,
      userId: userQuestion.user.id,
      venueCapacity: userQuestion.venueCapacity,
      venueName: userQuestion.venueName,
      venueType: preferredVenue,
      websiteLink: userQuestion.websiteLink,
      youtube: userQuestion.youtube,
      consumerName: userQuestion.consumerName,
      likelyHood: Math.floor(Math.random() * (99 - 40 + 1)) + 40,
      openHours:
        userQuestion.openingStartAt && userQuestion.openingEndAt
          ? userQuestion.openingStartAt.split(':')[0] +
            ':' +
            userQuestion.openingStartAt.split(':')[1] +
            '-' +
            userQuestion.openingEndAt.split(':')[0] +
            ':' +
            userQuestion.openingEndAt.split(':')[1]
          : null,
    };

    return userDetails;
  }

  getCurrentUserAnswers(
    userQuestionEntity: UserQuestionEntity,
    userPreferencesEntity: UserPreferencesEntity,
    artistList: ArtistTypeEntity[],
    genreList: MusicGenreEntity[],
    venueList: PreferredVenueEntity[],
    chatId: number,
    user: UserEntity,
    completePercentage: number,
  ) {
    const userDetails: UserProfileInterface = {
      countryCode: userQuestionEntity.countryCode,
      phoneCode: userQuestionEntity.phoneCode,
      countryId: userQuestionEntity.countryId
        ? {
            id: userQuestionEntity.countryId.id,
            name: userQuestionEntity.countryId.name,
          }
        : null,
      cityId: userQuestionEntity.cityId
        ? {
            id: userQuestionEntity.cityId.id,
            name: userQuestionEntity.cityId.name,
          }
        : null,
      chatId: chatId,
      activeTime: userQuestionEntity.activeTime,
      additionalLinks: userQuestionEntity.additionalLinks,
      artistType: artistList,
      averagePayPerGig: userQuestionEntity.averagePayPerGig
        ? String(userQuestionEntity.averagePayPerGig)
        : userQuestionEntity.averagePayPerGig,
      bandName: userQuestionEntity.bandName,
      bio: user.bio,
      bookingPrice: userQuestionEntity.bookingPrice
        ? String(userQuestionEntity.bookingPrice)
        : userQuestionEntity.bookingPrice,
      city: userQuestionEntity.city,
      country: userQuestionEntity.country,
      email: user.email,
      facebook: userQuestionEntity.facebook,
      followerCount: Number(userQuestionEntity.followerCount),
      genreType: genreList,
      gigs: userQuestionEntity.gigs,
      instagram: userQuestionEntity.instagram,
      livePerformancePerMonth: userQuestionEntity.livePerformancePerMonth,
      mobilePhone: userQuestionEntity.mobilePhone,
      musicianExposure: userQuestionEntity.musicianExposure
        ? String(userQuestionEntity.musicianExposure)
        : userQuestionEntity.musicianExposure,
      organizationName: userQuestionEntity.organizationName,
      peakSeason: userQuestionEntity.peakSeason,
      profileImage: user.profileImage,
      rating: userQuestionEntity.rating
        ? String(userQuestionEntity.rating)
        : null,

      socialMediaFollowers: userQuestionEntity.socialMediaFollowers,
      socialMediaLink: userQuestionEntity.socialMediaLink,
      spotify: userQuestionEntity.spotify,
      streetName: userQuestionEntity.streetName,
      userId: user.id,
      venueCapacity: userQuestionEntity.venueCapacity,
      venueName: userQuestionEntity.venueName,
      venueType: venueList,
      websiteLink: userQuestionEntity.websiteLink,
      audioUrl : userQuestionEntity.audioUrl,
      youtube: userQuestionEntity.youtube,
      profileCompletion: Math.floor(completePercentage),
      consumerName: userQuestionEntity.consumerName,
      openHours:
        userQuestionEntity.openingStartAt && userQuestionEntity.openingEndAt
          ? userQuestionEntity.openingStartAt.split(':')[0] +
            ':' +
            userQuestionEntity.openingStartAt.split(':')[1] +
            '-' +
            userQuestionEntity.openingEndAt.split(':')[0] +
            ':' +
            userQuestionEntity.openingEndAt.split(':')[1]
          : null,
    };
    return userDetails;
  }

  getgetDiscoveryListNew(
    data: any,
    count: number,
    page: string,
    limit: string,
  ) {
    return this.setDataNew(data, count, page, limit);
  }

  getRecommendedList(data: any, count: number, page, limit) {
    return this.setDataNew(data, count, page, limit);
  }

  private setDataNew(data, count, page, limit) {
    const list = [];

    for (let i = 0; i < data.length; i++) {
      const obj: UserProfileInterface = {
        activeTime: data[i].active_time,
        additionalLinks: data[i].additional_links,
        artistType: data[i].artistType,
        averagePayPerGig: data[i].average_pay_per_gig
          ? String(data[i].average_pay_per_gig)
          : data[i].average_pay_per_gig,
        bandName: data[i].band_name,
        bio: data[i].bio,
        bookingPrice: data[i].booking_price
          ? String(data[i].booking_price)
          : data[i].booking_price,
        chatId: data[i].chat_id,
        city: data[i].city,
        country: data[i].country,
        email: data[i].email,
        facebook: data[i].facebook,
        followerCount: Number(data[i].follower_count),
        genreType: data[i].genreType,
        gigs: data[i].gigs,
        instagram: data[i].instagram,
        isInContactList: data[i].isInContactList,
        likelyHood: Number(data[i].likelihood),
        likelihood: Number(data[i].likelihood),
        livePerformancePerMonth: data[i].live_performance_per_month,
        mobilePhone: data[i].mobile_phone,
        musicianExposure: data[i].musician_exposure
          ? String(data[i].musician_exposure)
          : data[i].musician_exposure,
        openHours:
          data[i].opening_start_at && data[i].opening_end_at
            ? data[i].opening_start_at.split(':')[0] +
              ':' +
              data[i].opening_start_at.split(':')[1] +
              '-' +
              data[i].opening_end_at.split(':')[0] +
              ':' +
              data[i].opening_end_at.split(':')[1]
            : null,
        organizationName: data[i].organization_name,
        peakSeason: data[i].peak_season,
        profileImage: data[i].profileimage,
        rating: data[i].rating ? String(data[i].rating) : null,
        socialMediaFollowers: data[i].social_media_followers,
        socialMediaLink: data[i].social_media_links,
        spotify: data[i].spotify,
        streetName: data[i].street_name,
        userId: data[i].user_id,
        userType: data[i].user_type,
        venueCapacity: data[i].venue_capacity,
        venueName: data[i].venue_name,
        audioUrl: data[i].audioUrl,
        venueType: data[i].venueType,
        websiteLink: data[i].website_link,
        youtube: data[i].youtube,
      };
      list.push(obj);
    }

    const totalPages = Math.ceil(Number(count) / Number(limit));
    return {
      data: list,
      meta: {
        // = (int)Math.Ceiling((float)_collection.Count / (float)_itemsPerPage);
        itemsPerPage: Number(limit),
        totalItems: Number(count),
        currentPage: Number(page),
        nextPage: Number(page) + 1 > totalPages ? null : Number(page) + 1,
        totalPages: totalPages,
      },
    };
  }
  

  getConsumerList(data: any, count: number, page: string, limit: string) {
    const list = [];

    if (data && isArray(data)) {
      data = data as any;
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if(element.artist_id!=null && element.venue_id!=null)
        {
        if(element.is_multiple_release===true)
        {
        const obj = {
          id: element.event_id,
          eventName: element.event_name,
          startTime: element.start_time,
          endTime: element.end_time,
          ticketPrice: element.ticket_price,
          gigType:'TWOSIDED',
          ticketPrice2: element.ticket_price2,
          ticketPrice3: element.ticket_price3,
          releaseName: element.release_name,
          releaseName2: element.release_name2,
          releaseName3: element.release_name3,
          ticketQuantity :element.ticket_quantity,
          ticketQuantity2 :element.ticket_quantity2,
          ticketQuantity3 :element.ticket_quantity3,
          isTicketClose:element.is_ticket_close,
          contractDescription:element.contract_discription?element.contract_discription:null,
          musicGenre: element.music_genre,
          createdAt: element.event_created_at,
          
         
          artist: {
            id: element.artist_id ?? null,
            name: element.artist_name ?? null,
            country: element.a_country ?? null,
            city: element.acity ?? null,
            bio: element.artist_bio ?? null,
            profileImage: element.artist_profile_image ?? null,
          },
          venue: {
            id: element.venue_id ?? null,
            name: element.venue_name ?? null,
            profileImage: element.venue_profile_image ?? null,
            country: element.v_country ?? null,
            city: element.v_city ?? null,
          },
        };
        list.push(obj);
        }
      else {
        const obj = {
          id: element.event_id,
          eventName: element.event_name,
          startTime: element.start_time,
          endTime: element.end_time,
          gigType:'TWOSIDED',
          ticketPrice: element.ticket_price,
          ticketQuantity: element.ticket_Quantity,
          releaseName: element.release_name,
          isTicketClose:element.is_ticket_close,
          musicGenre: element.music_genre,
          createdAt: element.event_created_at,
          contractDescription:element.contract_discription?element.contract_discription:null,
          artist: {
            id: element.artist_id ?? null,
            name: element.artist_name ?? null,
            country: element.a_country ?? null,
            city: element.a_city ?? null,
            bio: element.artist_bio ?? null,
            profileImage: element.artist_profile_image ?? null,
          },
          venue: {
            id: element.venue_id ?? null,
            name: element.venue_name ?? null,
            profileImage: element.venue_profile_image ?? null,
            country: element.v_country ?? null,
            city: element.v_city ?? null,
          },
        };
        list.push(obj);
      }
    }
      else if(element.artist_id!=null)
      {
        if(element.is_one_sided_ticket_sale===true)
        {
        const obj = {
          id: element.event_id,
          eventName: element.event_name,
          startTime: element.start_time,
          endTime: element.end_time,
          location:element.location,
          gigType:'ONESIDED',
          musicGenre: element.music_genre,
          createdAt: element.event_created_at,
          isTicketClose:element.is_ticket_close,
          isOneSidedTickeSale: element.is_one_sided_ticket_sale,
          ticketPrice: element.ticket_price,
          ticketPrice2: element.ticket_price2,
          ticketPrice3: element.ticket_price3,
          releaseName: element.release_name,
          releaseName2: element.release_name2,
          releaseName3: element.release_name3,
          ticketQuantity :element.ticket_quantity,
          ticketQuantity2 :element.ticket_quantity2,
          ticketQuantity3 :element.ticket_quantity3,
          contractDescription:element.contract_discription?element.contract_discription:null,
         
          artist: {
            id: element.artist_id ?? null,
            name: element.artist_name ?? null,
            country: element.a_country ?? null,
            city: element.a_city ?? null,
            bio: element.artist_bio ?? null,
            profileImage: element.artist_profile_image ?? null,
          },
        
        };

        list.push(obj);
      
      }
      else{
        const obj = {
          id: element.event_id,
          eventName: element.event_name,
          startTime: element.start_time,
          endTime: element.end_time,
          musicGenre: element.music_genre,
          createdAt: element.event_created_at,
          isOneSidedTickeSale: element.is_one_sided_ticket_sale,
          linkToTickets:element.link_to_tickets,
          linkToEvent:element.link_to_event,
          location:element.location,
          gigType:'ONESIDED',
         
          artist: {
            id: element.artist_id ?? null,
            name: element.artist_name ?? null,
            country: element.a_country ?? null,
            city: element.a_city ?? null,
            bio: element.artist_bio ?? null,
            profileImage: element.artist_profile_image ?? null,
          },
        
        };

        list.push(obj);
      }
      }
      else 
      {
        if(element.is_one_sided_ticket_sale===true)
        {
        const obj = {
          id: element.event_id,
          eventName: element.event_name,
          startTime: element.start_time,
          endTime: element.end_time,
          musicGenre: element.music_genre,
          createdAt: element.event_created_at,
          isTicketClose:element.is_ticket_close,
          isOneSidedTickeSale: element.is_one_sided_ticket_sale,
          gigType:'ONESIDED',
          ticketPrice: element.ticket_price,
          location:element.location,
          ticketPrice2: element.ticket_price2,
          ticketPrice3: element.ticket_price3,
          releaseName: element.release_name,
          releaseName2: element.release_name2,
          releaseName3: element.release_name3,
          ticketQuantity :element.ticket_quantity,
          ticketQuantity2 :element.ticket_quantity2,
          ticketQuantity3 :element.ticket_quantity3,
          contractDescription:element.contract_discription?element.contract_discription:null,
          venue: {
            id: element.venue_id ?? null,
            name: element.venue_name ?? null,
            profileImage: element.venue_profile_image ?? null,
            country: element.v_country ?? null,
            city: element.v_city ?? null,
          },
        };

        list.push(obj);
      }
    else{
      const obj = {
        id: element.event_id,
        eventName: element.event_name,
        startTime: element.start_time,
        endTime: element.end_time,
        musicGenre: element.music_genre,
        createdAt: element.event_created_at,
        isOneSidedTickeSale: element.is_one_sided_ticket_sale,
        linkToTickets:element.link_to_tickets,
        linkToEvent:element.link_to_event,
        location:element.location,
        contractDescription:element.contract_discription?element.contract_discription:null,
        gigType:'ONESIDED',
        venue: {
          id: element.venue_id ?? null,
          name: element.venue_name ?? null,
          profileImage: element.venue_profile_image ?? null,
          country: element.v_country ?? null,
          city: element.v_city ?? null,
        },
      };

      list.push(obj);
    }
  }
}
    }
    const totalPages = Math.ceil(Number(count) / Number(limit));

    return {
      data: list,
      meta: {
        // = (int)Math.Ceiling((float)_collection.Count / (float)_itemsPerPage);
        itemsPerPage: Number(limit),
        totalItems: Number(count),
        currentPage: Number(page),
        nextPage: Number(page) + 1 > totalPages ? null : Number(page) + 1,
        totalPages: totalPages,
      },
    };
  }
}

export interface UserProfileInterface {
  userId: number;
  email: string;
  profileImage: string;
  audioUrl:string;
  bio: string;
  genreType: MusicGenreEntity[];
  venueType: PreferredVenueEntity[];
  artistType: ArtistTypeEntity[];
  bandName: string;
  city: string;
  country: string;
  mobilePhone: string;
  activeTime: string;
  gigs: number;
  bookingPrice: string | number | null;
  additionalLinks: string;
  websiteLink: string;
  socialMediaLink: string;
  instagram: string;
  youtube: string;
  spotify: string;
  facebook: string;
  organizationName: string;
  venueName: string;
  streetName: string;
  venueCapacity: number;
  livePerformancePerMonth: number;
  peakSeason: string;
  musicianExposure: string | null | number;
  socialMediaFollowers: number;
  averagePayPerGig: string | null | number;
  followerCount: number;
  rating: string;
  likelyHood?: number;
  profileCompletion?: number;
  userType?: string;
  consumerName?: string;
  openHours?: string;
  chatId: number| null;

  countryId?: {
    id: number;
    name: string;
  };
  cityId?: {
    id: number;
    name: string;
  };
  countryCode?: string;
  phoneCode?: string;
  likelihood?: number;
  isInContactList?: boolean;
}

// export interface Meta {
//   itemsPerPage: number;
//   totalItems: number;
//   currentPage: number;
//   totalPages: number;
//   sortBy?: string[][] | null;
// }
