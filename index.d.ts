import { Sequelize, Model } from 'sequelize';

export interface DB {
  setup(): void;
  con: Sequelize;

  Activity: Model<ActivityInstance, any>;
  ActivityMediumVersion: Model<any, any>;
  CarouselMedium: Model<CarouselMediumInstance, any>;
  Comment: Model<CommentInstance, any>;
  Config: Model<ConfigInstance, any>;
  Highlight: Model<HighlightInstance, any>;
  MediumVersion: Model<MediumVersionInstance, any>;
  Post: Model<PostInstance, any>;
  StoryItem: Model<StoryItemInstance, any>;
  User: Model<UserInstance, any>;
}

interface ActivityInstance {
  id: string;
  type: number;
  text: string;
  profileId: BigInteger;
  profileImage: string;
  secondProfileId: BigInteger;
  secondProfileImage: string;
  timestamp: Date;
  completeJson: object;
}

interface CarouselMediumInstance {
  id: string;
  mediaType: number;
  originalHeight: number;
  originalWidth: number;
  completeJson: object;
}

interface CommentInstance {
  id: string;
  type: number;
  text: string;
  childCommentCount: number;
  likeCount: number;
  writtenAt: Date;
}

interface ConfigInstance {
  key: string;
  value: any;
}

interface HighlightInstance {
  id: string;
  title: number;
  mediaCount: number;
  latestMedia: Date;
  completeJson: object;
}

interface MediumVersionInstance {
  hash: string;
  url: string;
  type: string;
  size: number;
  height: number;
  width: number;
}

interface PostInstance {
  id: string;
  mediaType: number;
  caption: string;
  likeCount: number;
  commentCount: number;
  originalHeight: number;
  originalWidth: number;
  hasLiked: boolean;
  isCaptionEdited: boolean;
  isPhotoOfYou: boolean;
  deviceTimestamp: string;
  takenAt: Date;
  completeJson: object;
}

interface StoryItemInstance {
  id: string;
  mediaType: number;
  takenAt: Date;
  expiringAt: Date;
  originalHeight: number;
  originalWidth: number;
  completeJson: object;
}

interface UserInstance {
  id: BigInteger;
  username: string;
  fullName: string;
  profileImage: string;
  biography: string;
  profileContext: string;
  externalUrl: string;
  followerCount: number;
  mutualFollowersCount: number;
  followingCount: number;
  followingTagCount: number;
  mediaCount: number;
  geoMediaCount: number;
  usertagsCount: number;
  hasHighlightReels: boolean;
  isBestie: boolean;
  isFavorite: boolean;
  isInterestAccount: boolean;
  isPotentialBusiness: boolean;
  isPrivate: boolean;
  isVerified: boolean;
  completeJson: object;
}
