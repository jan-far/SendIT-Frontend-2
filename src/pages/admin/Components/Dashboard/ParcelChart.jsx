import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAllUserParcel } from '../../../../Redux/admin/adminSelector';

class ParcelChart extends Component {
  render() {
    const { AllUsersParcel } = this.props;

    let processing = 0;
    let pending = 0;
    let delivered = 0;

    //  Get the stats of parcels by status
    for (let i = 0; i < AllUsersParcel.length; i++) {
      if (AllUsersParcel[i].status === 'processing') {
        processing += 1;
      } else if (AllUsersParcel[i].status !== 'delivered') {
        pending += 1;
      } else {
        delivered += 1;
      }
    }

    const parcelState = {
      labels: ['processing', 'pending', 'delivered'],
      datasets: [
        {
          label: 'Parcel',
          backgroundColor: [
            '#B21F00',
            '#C9DE00',
            '#2FDE00',
            // '#00A6B4',
            // '#6800B4'
          ],
          hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            // '#003350',
            // '#35014F'
          ],
          data: [processing, pending, delivered],
        },
      ],
    };

    const chartOptions = {
      title: {
        display: true,
        text: 'Parcel Status Chart',
        fontSize: 20,
      },
      legend: {
        display: true,
        position: 'bottom',
      },
    };

    let width = window.innerWidth;
    window.addEventListener('resize', () => {
      width = window.innerWidth;
    });

    const calcHeight = width <= 968 ? (width <= 768 ? 120 : 140) : 200;

    return <Pie  height={calcHeight} background={'white'} data={parcelState} options={chartOptions}/>;
  }
}

const mapStateToProps = createStructuredSelector({
  AllUsersParcel: selectAllUserParcel,
});

export default connect(mapStateToProps)(ParcelChart);
