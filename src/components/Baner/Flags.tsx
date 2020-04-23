import React from 'react';
import './Banner.scss'

export const Flags: React.FC = () => {
    const flags = [
        'Sale',
        'Revenue',
        'Shipment',
        'Dashboards',
        'Users',
        'Booking',
        'Admin',
        'Late',
        'Values',
        'Benefits',
        'Bank',
        'Master',
        'Employee',
        'Management'
    ];

    let renderFlags = flags.map((flag: any) => (
        <span className={'flags__box'}>
            {flag}
            <i className="fa fa-times flags__icon" aria-hidden="true"> </i>
        </span>
    ));

    return (
        <div className={'flags'}>
            {renderFlags}
        </div>
    )
}