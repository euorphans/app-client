import style from './Avatar.module.scss';
import React, { FC, useEffect } from 'react';
import { PremiumBackgroundGradient } from '../../icons/Icons';
import { config } from '../../../config';
import axios, { AxiosResponse } from 'axios';
import { SortRoles } from '../../../utils/SortRoles';
import { ComponentInterface } from '../../../types';

interface Avatar extends ComponentInterface {
  username: string | undefined;
  data?: any;
  size?: number;
  heightPremium?: number;
  widthPremium?: number;
}

export const Avatar: FC<Avatar> = ({
  username,
  size,
  styles,
  widthPremium,
  heightPremium,
  data
}) => {
  const [roles, setRoles]: any = React.useState([]);
  const [perms, setPerms]: any = React.useState([]);

  useEffect(() => {
    if (!data) {
      axios.get(`${config.apiURL}user/get/name/${username}`).then((response: AxiosResponse) => {
        SortRoles(response.data.user.roles, setRoles, setPerms);
      });
    } else {
      SortRoles(data, setRoles, setPerms);
    }
  }, []);

  return (
    <div className={style.wrapper}>
      <img
        style={{
          borderRadius: 'var(--radii-round)',
          ...styles
        }}
        src={`https://skin.vimeworld.com/head/${username}.png`}
        alt="avatar"
      />
      {!perms.includes('premium_plus.icon') ? (
        <div className={style.icon}>
          <PremiumBackgroundGradient width={widthPremium} height={heightPremium} />
        </div>
      ) : null}
    </div>
  );
};
