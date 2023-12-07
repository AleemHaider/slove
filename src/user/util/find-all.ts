import { DISCOVER_PREFERENCE_TYPE } from '../../util/constant';
import { UserPreferencesEntity } from '../../entity/user-preferences.entity';
import * as dayjs from 'dayjs';
export const getWhereDiscovery = (
  type: string | undefined,
  typeId: string | undefined,
  search: string | undefined,
  searchType: string| undefined
  
) => {
  let query = ' ';
  if (type && typeId) {
    if (type == DISCOVER_PREFERENCE_TYPE.ARTIST.toString()) {
      query =
        query + `where (up.artist_type &&  '{${typeId}}' OR array_length(up.artist_type, 1) IS NULL) and u.user_type_id=1 `;
      if (search && search.length > 0) {
      
        if (search && search.length > 0) {
       
          if(searchType==="0")
          {
            query = query + ` and uq.band_name ilike '%${search}%'  `;
          }
          else if(searchType==="1")
          {
            query = query + ` and (uq.city ilike '%${search}%' or uq.country ilike '%${search}%') `;
          }
          else if(searchType===undefined)
          {
            query = query + ` and uq.band_name ilike '%${search}%'  `;
          }
        }
      }
    }
    if (type == DISCOVER_PREFERENCE_TYPE.VENUE.toString()) {
      query =
        query +
        ` where (up.preferred_venue &&  '{${typeId}}' OR array_length(up.preferred_venue, 1) IS NULL) and u.user_type_id=2 `;
      if (search && search.length > 0) {
        
      
        if(searchType==="0")
          {
            query = query + ` and uq.venue_name ilike '%${search}%'  `;
          }
          else if(searchType==="1")
          {
            query = query + ` and (uq.city ilike '%${search}%' or uq.country ilike '%${search}%') `;
          }
          else if(searchType===undefined)
          {
            query = query + ` and uq.venue_name ilike '%${search}%'  `;
          }
        
      }
    }
    if (type == DISCOVER_PREFERENCE_TYPE.EVENT.toString()) {
      query = query + ` where up.preferred_event &&  '{${typeId}}' `;
    }
  }
  return query;
};

export const getAllConsumerWhereList = (
  search: string | undefined,
  genre: string | undefined,
  preferences: UserPreferencesEntity,
  searchType: string | undefined
) => {
  let query = '';

  query = query + `and e.start_time >= '${dayjs(new Date()).format('YYYY-MM-DD')}' `;
   
    
    

if( searchType==="0")
{
  if (search && search.length > 0) {
    query = query + ` and e.event_name ilike '%${search}%' `;
  }
  if (genre && genre.length > 0) {
    query = query + ` and bc.music_genre && '{${genre}}' `;
  } else {
    query = query + ` and bc.music_genre && '{${preferences.musicGenre}}' `;
  }
}
else if( searchType==="1")
{
  if (search && search.length > 0) {
    query = query + ` and  (venue_country.name ilike '%${search}%' or venue_city.name ilike '%${search}%') `;
  }
   if (genre && genre.length > 0) {
    query = query + ` and bc.music_genre && '{${genre}}' `;
  } else {
    query = query + ` and bc.music_genre && '{${preferences.musicGenre}}' `;
  }
}
else
{
  query = query + ` and bc.music_genre && '{${preferences.musicGenre}}' `;
}

return query;
};
