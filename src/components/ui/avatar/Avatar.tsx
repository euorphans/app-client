import style from './Avatar.module.scss';
import React, { FC, useEffect } from 'react';
import { StarIcon } from '../../icons/Icons';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { UserInterface } from '../../../models/interfaces/User.interface';
import { config } from '../../../config';
import axios, { AxiosResponse } from 'axios';
import { RoleInterface } from '../../../models/interfaces/Role.interface';
import { SortRoles } from '../../../utils/SortRoles';
import { createState, useState } from '@hookstate/core';
import { ComponentInterface } from '../../../models/interfaces/Component.interface';

interface AvatarI extends ComponentInterface {
  username: string | undefined;
  data?: any;
  size?: number;
  heightPremium?: string;
  widthPremium?: string;
}

export const Avatar: FC<AvatarI> = ({
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
      {perms.includes('premium_plus.icon') ? (
        <div className={style.icon}>
          <StarIcon width={widthPremium} height={heightPremium} />
        </div>
      ) : null}
    </div>
  );
};
