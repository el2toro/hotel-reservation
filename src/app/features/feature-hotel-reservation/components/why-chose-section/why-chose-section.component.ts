import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-chose-section',
  templateUrl: './why-chose-section.component.html',
  styleUrls: ['./why-chose-section.component.scss']
})
export class WhyChoseSectionComponent implements OnInit {

  featureItems = [
    {
      icon: 'speedometer',
      title: 'INSTANT BOOKING',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate lectus eget leo convallis, nec sagittis nunc convallis.'
    },
    {
      icon: 'money-bill',
      title: 'BEST PRICE GUARANTEE',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate lectus eget leo convallis, nec sagittis nunc convallis.'
    },
    {
      icon: 'support',
      title: 'TEAL-TIME SUPPORT',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate lectus eget leo convallis, nec sagittis nunc convallis.'
    },
    {
      icon: 'security',
      title: 'SECURE BROWSING',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate lectus eget leo convallis, nec sagittis nunc convallis.'
    },
    {
      icon: 'mobile-android',
      title: 'MOBILE FRIENDLY',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate lectus eget leo convallis, nec sagittis nunc convallis.'
    },
    {
      icon: 'map-pointer',
      title: 'MAP AND LOCATION INFO',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate lectus eget leo convallis, nec sagittis nunc convallis.'
    },
  ];

  constructor() { }

  ngOnInit() {
    this.initFeatureItems();
  }

  initFeatureItems(){
    this.featureItems = [
      {
        icon: 'speedometer',
        title: 'INSTANT BOOKING',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate lectus eget leo convallis, nec sagittis nunc convallis.'
      },
      {
        icon: 'money-bill',
        title: 'BEST PRICE GUARANTEE',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate lectus eget leo convallis, nec sagittis nunc convallis.'
      },
      {
        icon: 'support',
        title: 'TEAL-TIME SUPPORT',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate lectus eget leo convallis, nec sagittis nunc convallis.'
      },
      {
        icon: 'security',
        title: 'SECURE BROWSING',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate lectus eget leo convallis, nec sagittis nunc convallis.'
      },
      {
        icon: 'mobile-android',
        title: 'MOBILE FRIENDLY',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate lectus eget leo convallis, nec sagittis nunc convallis.'
      },
      {
        icon: 'map-pointer',
        title: 'MAP AND LOCATION INFO',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate lectus eget leo convallis, nec sagittis nunc convallis.'
      },
    ]
  }
}
