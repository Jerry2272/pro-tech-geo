import taskService from '../assets/taskService.jpg'
import cancelFee from '../assets/cancelFee.jpg'
import premuim from '../assets/prem.jpg'
import priority from '../assets/priority.jpg'
import gen from '../assets/generalHour.jpg'


export const prices = [
    {
      img: gen,
      title: 'General Hourly Rate',
      price: 2000
    },
    {
        img: premuim,
      title: 'Premuim Hourly Rate',
      price: 2500
    },
    {
        img: priority,
      title: 'Priority Rate',
      price: 3500
    },
    {
        img: taskService,
      title: 'Task Service Charge',
      price: 'Negotiable'
    },
    {
        img: cancelFee,
      title: 'Cancellation Fee',
      price: 1500
    }
  ];
  