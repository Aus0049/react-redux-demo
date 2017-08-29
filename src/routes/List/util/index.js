/**
 * Created by Aus on 2017/8/29.
 */
import React from 'react'
import { Link } from 'react-router'

export function getListDOM({ list }) {
    const result = [];
    list.map((item) => {
        result.push(
            <li key={item.id}>
                <Link to={`/list/detail/${item.id}`}>{item.title}</Link>
            </li>
        );
    });

    return result;
}