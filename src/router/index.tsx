import React from 'react';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { PlayerPage } from '../pages/PlayerPage';
import { MatchPage } from '../pages/MatchPage';
import { PlayPage } from '../pages/PlayPage';
import { PrivacyPage } from '../pages/PrivacyPage';
import { SubscriptionPage } from '../pages/SubscriptionPage';
import { TermsPage } from '../pages/TermsPage';
import { PlayerSettingsPage } from '../pages/PlayerSettingsPage';
import { RulesPage } from '../pages/RulesPage';
import { RankingsPage } from '../pages/RankingsPage';
import { PersonalPage } from '../pages/PersonalPage';
import { Forbidden } from '../pages/Forbidden';
import { ReportPage } from '../pages/ReportPage';

export interface PrivacyRequirements {
  authRequire: boolean;
  perms: string | null;
}

export interface IRoute {
  path: string;
  element: React.CElement<any, any>;
  privacy: PrivacyRequirements;
}

export enum RoutesEnum {
  HOME_PAGE = '/',
  PLAYER_PAGE = '/player/:username',
  SETTINGS_PAGE = '/settings',
  MATCH_PAGE = '/match',
  PLAY_PAGE = '/play',
  SUBSCRIPTION_PAGE = '/subscription',
  PRIVACY_PAGE = '/privacy',
  TERMS_PAGE = '/terms',
  RULES_PAGE = '/rules',
  RANKINGS_PAGE = '/rankings',
  PERSONAL_PAGE = '/personal',
  REPORT_PAGE = '/warden',
  NOTFOUND_PAGE = '*'
}

// eslint-disable-next-line @typescript-eslint/ban-types
const setPrivacy: Function = (authRequire: boolean, perms: string | null): PrivacyRequirements => {
  return { authRequire: authRequire, perms: perms };
};

export const routes: Array<IRoute> = [
  { path: RoutesEnum.HOME_PAGE, element: <HomePage />, privacy: setPrivacy(false, null) },
  { path: RoutesEnum.PLAYER_PAGE, element: <PlayerPage />, privacy: setPrivacy(false, null) },
  { path: RoutesEnum.MATCH_PAGE, element: <MatchPage />, privacy: setPrivacy(false, null) },
  { path: RoutesEnum.PLAY_PAGE, element: <PlayPage />, privacy: setPrivacy(false, null) },
  { path: RoutesEnum.REPORT_PAGE, element: <ReportPage />, privacy: setPrivacy(true, null) },
  {
    path: RoutesEnum.SUBSCRIPTION_PAGE,
    element: <SubscriptionPage />,
    privacy: setPrivacy(false, null)
  },
  { path: RoutesEnum.PRIVACY_PAGE, element: <PrivacyPage />, privacy: setPrivacy(false, null) },
  { path: RoutesEnum.TERMS_PAGE, element: <TermsPage />, privacy: setPrivacy(false, null) },
  { path: RoutesEnum.RULES_PAGE, element: <RulesPage />, privacy: setPrivacy(false, null) },
  { path: RoutesEnum.PERSONAL_PAGE, element: <PersonalPage />, privacy: setPrivacy(false, null) },
  {
    path: RoutesEnum.SETTINGS_PAGE,
    element: <PlayerSettingsPage />,
    privacy: setPrivacy(true, null)
  },
  { path: RoutesEnum.RANKINGS_PAGE, element: <RankingsPage />, privacy: setPrivacy(false, null) },
  { path: RoutesEnum.NOTFOUND_PAGE, element: <NotFoundPage />, privacy: setPrivacy(false, null) }
];
