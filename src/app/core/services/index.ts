/*import { GapiLoader } from './gapi-loader.service';
import { GoogleAuthorization } from './g-authorization.service';
import { Authorization } from './authorization.service';
import { AuthGuard } from './user.guard';
import { UserProfile } from './user-profile.service';
import { UserPlaylistService } from './user-playlist.service';
import { FudeziUserData } from './fu-user-data.service';
import { FudeziSearch } from './fudezi.search';
import { FudeziVendorData } from './fu-vendor-data.service';
import { FuVendorMapService } from './fu-vendor-map.service';
import { FuVendorLocations } from './fu-vendor-location.service';
import { FudeziApiService } from './web-api.service';
import { AppEvents } from './events.service';
import { AlertService } from './alert.service';
import { WindowRef } from './window.service';
import { CensusGeocoder } from './census-geocoder.service';*/
import { VersionCheckerService } from './version-checker.service';
import { MediaParserService } from './media-parser.service';
//import { YoutubeSearch } from './youtube.search';
//import { YoutubeVideosInfo } from './youtube-videos-info.service';
//import { YoutubeDataApi } from './youtube-data-api.service';
//import { YoutubePlayerService } from './youtube-player.service';
//import { NowPlaylistService } from './now-playlist.service';

/*export * from './gapi-loader.service';
export * from './authorization.service';
export * from './g-authorization.service';
export * from './user.guard';
export * from './user-profile.service';
export * from './user-playlist.service';
export * from './fu-user-data.service';
export * from './fudezi.search';
export * from './fu-vendor-data.service';
export * from './fu-vendor-map.service';
export * from './fu-vendor-location.service';
export * from './web-api.service';
export * from './events.service';
export * from './alert.service';
export * from './window.service';
export * from './census-geocoder.service';*/
export * from './version-checker.service';
export * from './media-parser.service';
//export * from './youtube.search';
//export * from './youtube-videos-info.service';
//export * from './youtube-player.service';
//export * from './now-playlist.service';

export const SERVICES = [
  /*{ provide: GapiLoader, useClass: GapiLoader },
  { provide: Authorization, useClass: Authorization },
  { provide: GoogleAuthorization, useClass: GoogleAuthorization },
  { provide: AuthGuard, useClass: AuthGuard },
  { provide: UserProfile, useClass: UserProfile },
  { provide: UserPlaylistService, useClass: UserPlaylistService },
  { provide: FudeziUserData, useClass: FudeziUserData},
  { provide: FudeziSearch, useClass: FudeziSearch },
  { provide: FudeziVendorData, useClass: FudeziVendorData},
  { provide: FuVendorMapService, useClass: FuVendorMapService },
  { provide: FuVendorLocations, useClass: FuVendorLocations },
  { provide: FudeziApiService, useClass: FudeziApiService },
  { provide: AppEvents, useClass: AppEvents },
  { provide: AlertService, useClass: AlertService },
  { provide: WindowRef, useClass: WindowRef },
  { provide: CensusGeocoder, useClass: CensusGeocoder },*/
  VersionCheckerService,
  MediaParserService,
/*{ provide: YoutubePlayerService, useClass: YoutubePlayerService },
  { provide: NowPlaylistService, useClass: NowPlaylistService },
  { provide: YoutubeSearch, useClass: YoutubeSearch },
  { provide: YoutubeVideosInfo, useClass: YoutubeVideosInfo },
  { provide: YoutubeDataApi, useClass: YoutubeDataApi },*/
];