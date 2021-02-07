import React from 'react';
import history from '../../history';

export default function DashboardItem(props) {
    return (
        <div>
            <a href="/line" onClick={() => history.push('/line')} className="btn btn-danger btn-sl btn-block"><i className="fa fa-line-chart"></i><br />Line</a>
            <a href="/pie" onClick={() => history.push('/pie')} className="btn btn-warning btn-sl btn-block"><i className="fa fa-pie-chart"></i><br />Pie</a>
            <a href="/bar" onClick={() => history.push('/bar')} className="btn btn-primary btn-sl btn-block"><i className="fa fa-bar-chart"></i><br />Bar</a>
            <a href="/map" onClick={() => history.push('/map')} className="btn btn-success btn-sl btn-block"><i className="fa fa-globe"></i><br />Maps</a>
            <a href="/login" onClick={() => history.push('/login')} className="btn btn-secondary btn-lg btn-block"><i className="fa fa-user-circle"></i>  Admin Panel</a>
        </div>
    )
}