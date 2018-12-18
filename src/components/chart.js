

import React from 'react'
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    return _.round(_.sum(data) / data.length);
}

export default function chart(props) {
    return (
        <div>
            <Sparklines data={props.data} limit={7} height="70" width="120">
                {/* <SparklinesBars style={{ fill: 'blue', fillOpacity: ".5" }} /> */}
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    )
}

