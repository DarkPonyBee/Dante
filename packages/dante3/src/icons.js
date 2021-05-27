import React from "react";

// IMAGE TOOLTIP

export function imageFill() {
  return (
    <svg id="icon-image-fill" width="20px" height="20px" viewBox="0 0 36 32">
      <path fill="currentColor" d="M4 26h28v3h-28v-3zM0 2h36v21h-36v-21z" />
    </svg>
  );
}

export function speech() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path
        fill="#00000070"
        d="M9.5 14c-1.93 0-3.5-1.57-3.5-3.5v-6c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5v6c0 1.93-1.57 3.5-3.5 3.5zM9.5 2c-1.378 0-2.5 1.122-2.5 2.5v6c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5v-6c0-1.378-1.122-2.5-2.5-2.5z"
      />
      <path
        fill="#00000070"
        d="M16 10.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5c0 3.033-2.467 5.5-5.5 5.5s-5.5-2.467-5.5-5.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5c0 3.416 2.649 6.225 6 6.481v2.019h-1.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-1.5v-2.019c3.351-0.256 6-3.065 6-6.481z"
      />
    </svg>
  );
}

export function imageCenter() {
  return (
    <svg id="icon-image-center" width="20px" height="20px" viewBox="0 0 36 32">
      <path
        fill="currentColor"
        d="M4 26h28v3h-28v-3zM4 8h28v15h-28v-15zM4 2h28v3h-28v-3z"
      />
    </svg>
  );
}

export function imageLeft() {
  return (
    <svg id="icon-image-left" width="20px" height="20px" viewBox="0 0 36 32">
      <path
        fill="currentColor"
        d="M8 26h28v3h-28v-3zM24 20h12v3h-12v-3zM0 8h21v15h-21v-15zM24 14h12v3h-12v-3zM24 8h12v3h-12v-3zM8 2h28v3h-28v-3z"
      />
    </svg>
  );
}

export function imageWide() {
  return (
    <svg id="icon-image-wide" width="20px" height="20px" viewBox="0 0 36 32">
      <path
        fill="currentColor"
        d="M4 26h28v3h-28v-3zM0 8h36v15h-36v-15zM4 2h28v3h-28v-3z"
      />
    </svg>
  );
}

// INLINE TOOLTIP

export function image() {
  return (
    <svg
      className="icon-photo"
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#494B56"
        fillRule="nonzero"
        d="M17.0705329,6.17097418 L14.5626959,6.17097418 L14.3369906,5.2405567 L14.3119122,5.13717696 C14.1112853,4.46520879 13.5094044,4 12.8322884,4 L8.1426332,4 C7.4655172,4 6.8636364,4.46520879 6.6630094,5.13717696 L6.4122257,6.17097418 L3.9043887,6.17097418 C3.1269592,6.17097418 2.5,6.84294235 2.5,7.61829026 L2.5,15.5526838 C2.5,16.3538767 3.1520376,17 3.9043887,17 L17.0956113,17 C17.8730408,17 18.5,16.3280317 18.5,15.5526838 L18.5,7.64413522 C18.5,6.84294235 17.8479624,6.17097418 17.0705329,6.17097418 Z M17.7476489,15.5526838 C17.7476489,15.9145129 17.4467085,16.2246521 17.0956113,16.2246521 L3.9043887,16.2246521 C3.5532915,16.2246521 3.2523511,15.9145129 3.2523511,15.5526838 L3.2523511,7.64413522 C3.2523511,7.28230618 3.5532915,6.97216695 3.9043887,6.97216695 L7.0141066,6.97216695 L7.3902821,5.42147112 L7.3902821,5.34393634 C7.515674,5.00795226 7.8166144,4.80119287 8.1426332,4.80119287 L12.8322884,4.80119287 C13.1583072,4.80119287 13.484326,5.03379722 13.5846395,5.34393634 L13.9858934,6.97216695 L17.0705329,6.97216695 C17.4467085,6.97216695 17.7476489,7.28230618 17.7476489,7.64413522 L17.7476489,15.5526838 Z M10.4749216,7.51491052 C8.468652,7.51491052 6.838558,9.19483105 6.838558,11.2624254 C6.838558,13.3300198 8.468652,15.0099403 10.4749216,15.0099403 C12.4811912,15.0099403 14.1112853,13.3300198 14.1112853,11.2624254 C14.1112853,9.19483105 12.4811912,7.51491052 10.4749216,7.51491052 Z M10.4749216,14.2345924 C8.8949843,14.2345924 7.5909091,12.890656 7.5909091,11.2624254 C7.5909091,9.63419477 8.8949843,8.29025843 10.4749216,8.29025843 C12.0548589,8.29025843 13.3589342,9.63419477 13.3589342,11.2624254 C13.3589342,12.9165009 12.0799373,14.2345924 10.4749216,14.2345924 Z"
      ></path>
    </svg>
  );
}

export function video() {
  return (
    <svg
      className="icon-video"
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#494B56"
        fillRule="nonzero"
        d="M6.5,4 L6.5,15.5471358 L16.5,9.7735679 L6.5,4 Z M7.2945422,5.375733 L14.9109157,9.7735679 L7.2945422,14.1714028 L7.2945422,5.375733 Z"
        id="Shape"
      ></path>
    </svg>
  );
}

export function divider() {
  return (
    <svg
      className="icon-spacer"
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#494B56"
        d="M3,10 L4,10 L4,11 L3,11 L3,10 Z M5,10 L6,10 L6,11 L5,11 L5,10 Z M7,10 L8,10 L8,11 L7,11 L7,10 Z M9,10 L10,10 L10,11 L9,11 L9,10 Z M11,10 L12,10 L12,11 L11,11 L11,10 Z M13,10 L14,10 L14,11 L13,11 L13,10 Z M15,10 L16,10 L16,11 L15,11 L15,10 Z M17,10 L18,10 L18,11 L17,11 L17,10 Z"
      ></path>
      <rect
        fill="#DEE0E8"
        fillRule="nonzero"
        x="2"
        y="6"
        width="17"
        height="2"
      ></rect>
      <rect
        fill="#DEE0E8"
        fillRule="nonzero"
        x="2"
        y="13"
        width="17"
        height="2"
      ></rect>
    </svg>
  );
}

export function button() {
  return (
    <svg
      className="icon-button"
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#494B56"
        fillRule="nonzero"
        d="M12.2382748,16.999996 L8.31885183,16.9847535 C8.15303655,16.9841672 8.01611714,16.8713137 8.00586918,16.7269491 C7.92590153,15.5935771 7.14470492,14.7307605 6.42701203,13.776342 C6.0888295,13.3266866 5.90907027,12.7562633 6.04632568,12.259268 C6.17501312,11.7924647 6.56930741,11.4407135 7.22164859,11.324489 L7.32916812,11.311738 L7.32916812,7.98548983 L7.32732013,7.8889048 C7.33588809,7.62890201 7.44189563,7.40729864 7.64063877,7.24695869 C7.86021382,7.06976399 8.15370855,7 8.4418273,7 C8.75615393,7 9.08308052,7.03854604 9.30467155,7.24666553 C9.52189463,7.45053475 9.55986241,7.74571269 9.54743054,8.05158978 L9.54306253,9.42488547 L9.66469398,9.39483999 C9.74768567,9.38194244 9.83218929,9.37593336 9.91602093,9.37593336 C10.0809962,9.37593336 10.2394195,9.38692558 10.3823868,9.42122134 C10.5295542,9.45654303 10.6678177,9.51824607 10.7788651,9.62259898 C10.833129,9.6737495 10.8763047,9.7304694 10.9102406,9.79158611 L10.9584564,9.91557852 L11.1810555,9.86076387 C11.2640471,9.8478664 11.3483827,9.84185723 11.4322144,9.84185723 C11.5971896,9.84185723 11.755613,9.85284954 11.8985803,9.88714521 C12.0455797,9.92246691 12.183843,9.98416994 12.2948906,10.0885229 C12.4035862,10.1906773 12.4674259,10.3154024 12.5023697,10.4528786 L12.5048897,10.4690005 L12.5532735,10.4618189 C12.6070332,10.4566892 12.6612971,10.4541976 12.7155608,10.4541976 C13.0739032,10.4541976 13.3823499,10.5326089 13.6012529,10.784111 C13.7905881,11.0017572 13.8789557,11.3176005 13.9535474,11.6910431 C14.283666,13.5689553 12.7530246,15.5343657 12.5515935,16.7641761 C12.5292496,16.8998935 12.3955222,17.0007288 12.2382748,16.999996 Z M11.9783799,16.4496518 L11.9839239,16.4238567 C12.3303384,15.0848568 13.6115009,13.3706555 13.3317821,11.7800069 C13.2561824,11.4014346 13.1844468,11.214127 13.0994391,11.116516 C13.0439993,11.0527611 12.9638637,11.003809 12.7155608,11.003809 C12.648697,11.003809 12.5893933,11.0099647 12.5369776,11.0208104 L12.5274016,11.847719 C12.5258896,11.9994118 12.3834262,12.1213522 12.209547,12.1198866 C12.0356677,12.1185675 11.8958924,11.994282 11.8975724,11.8425893 L11.9078203,10.8820152 C11.9197483,10.5836128 11.8654844,10.4927437 11.8333966,10.4625518 C11.8050047,10.4360238 11.724029,10.3914687 11.4322144,10.3914687 C11.2213752,10.3914687 11.0911758,10.450387 11.0229681,10.5255738 L11.0112082,11.3819417 C11.0096962,11.5336344 10.8672327,11.6555749 10.6933536,11.6541092 C10.5194743,11.6527902 10.3796989,11.5285047 10.3813789,11.376812 L10.3917949,10.4163844 C10.4037228,10.117982 10.3494591,10.0269664 10.3173711,9.99662789 C10.2889793,9.97009992 10.2076676,9.9255448 9.91602093,9.9255448 C9.75776556,9.9255448 9.64503811,9.95881462 9.57095042,10.006301 L9.54121456,10.0312167 L9.53701451,11.4081765 C9.53667857,11.5598692 9.39505511,11.6825425 9.22117592,11.6821028 C9.04729667,11.6818097 8.90668128,11.558257 8.90718528,11.4065643 L8.91760124,8.0411838 C8.92952918,7.74190211 8.87560141,7.65132615 8.84317756,7.62069444 C8.81478568,7.59416656 8.73364203,7.54961135 8.4418273,7.54961135 C8.26190008,7.54961135 8.13926061,7.59328716 8.06836492,7.65044675 C8.0045252,7.70203697 7.94589345,7.79305254 7.9584934,7.96848854 L7.95916538,7.98548983 L7.95916538,12.8607627 C7.95916538,13.0124555 7.817878,13.1355684 7.64416675,13.1355684 C7.47028751,13.1355684 7.32916812,13.0124555 7.32916812,12.8607627 L7.32916812,11.867505 L7.18216876,11.9015076 C6.86213014,11.9979461 6.71496278,12.1843743 6.65885103,12.3879504 C6.57384339,12.6958793 6.68018694,13.1110924 6.95368974,13.4748618 C7.5395032,14.2538444 8.31582784,15.1258945 8.56312277,16.2135388 L8.60529059,16.4364612 L11.9783799,16.4496518 Z"
      ></path>
      <path
        fill="#494B56"
        fillRule="nonzero"
        d="M15.1508665,12.9 L15.1508665,12.1 L15.5514921,12.1 C17.5101104,12.1 19.1,10.4893769 19.1,8.5 C19.1,6.51062312 17.5101104,4.9 15.5514921,4.9 L4.44850787,4.9 C2.4898895,4.9 0.9,6.51062311 0.9,8.5 C0.9,10.4893769 2.4898895,12.1 4.44850787,12.1 L4.69642245,12.1 L4.69642245,12.9 L4.44850787,12.9 C2.04572487,12.9 0.1,10.9289011 0.1,8.5 C0.1,6.07109889 2.04572487,4.1 4.44850787,4.1 L15.5514921,4.1 C17.9542751,4.1 19.9,6.0710989 19.9,8.5 C19.9,10.9289011 17.9542751,12.9 15.5514921,12.9 L15.1508665,12.9 Z"
      ></path>
    </svg>
  );
}

export function card() {
  return (
    <svg
      className="icon-signature"
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#494B56"
        fillRule="nonzero"
        d="M9.9347554,11.8295455 C9.795059,11.8295455 9.68330189,11.7113637 9.68330189,11.5636364 L9.68330189,10.3522727 C9.68330189,10.3375 9.68330189,10.3227273 9.68330189,10.3079546 C10.2839964,9.7909091 10.6611767,9.00795455 10.6611767,8.13636364 L10.6611767,6.80681819 C10.6611767,5.25568182 9.47375729,4 8.00694511,4 C6.54013294,4 5.35271355,5.25568182 5.35271355,6.80681819 L5.35271355,8.13636364 C5.35271355,9.00795455 5.72989382,9.7909091 6.33058833,10.3079546 C6.33058833,10.3227273 6.33058833,10.3375 6.33058833,10.3522727 L6.33058833,11.5636364 C6.33058833,11.7113637 6.21883121,11.8295455 6.07913482,11.8295455 C3.83002281,11.8295455 2,13.7647727 2,16.1431819 C2,16.6159091 2.36321064,17 2.81023911,17 L13.1896814,17 C13.6367099,17 13.9999205,16.6159091 13.9999205,16.1431819 C14.0138902,13.7647727 12.1838674,11.8295455 9.9347554,11.8295455 Z M6.19089194,8.13636364 L6.19089194,6.80681819 C6.19089194,5.74318183 7.00113105,4.88636364 8.00694511,4.88636364 C9.01275918,4.88636364 9.82299828,5.74318183 9.82299828,6.80681819 L9.82299828,8.13636364 C9.82299828,9.20000001 9.01275918,10.0568182 8.00694511,10.0568182 C7.00113105,10.0568182 6.19089194,9.20000001 6.19089194,8.13636364 Z M2.83817839,16.1136363 C2.85214803,14.2375 4.29102093,12.7159091 6.07913482,12.7159091 C6.67982933,12.7159091 7.16876672,12.1988637 7.16876672,11.5636364 L7.16876672,10.7954546 C7.43418988,10.8840909 7.71358268,10.9431818 8.00694511,10.9431818 C8.30030755,10.9431818 8.57970034,10.8840909 8.8451235,10.7954546 L8.8451235,11.5488637 C8.8451235,12.1840909 9.33406089,12.7011364 9.9347554,12.7011364 C11.7228693,12.7159091 13.1617422,14.2375 13.1757119,16.1136363 L2.83817839,16.1136363 Z"
      ></path>
      <rect
        fill="#494B56"
        fillRule="nonzero"
        x="13"
        y="6"
        width="6"
        height="1"
      ></rect>
      <rect
        fill="#494B56"
        fillRule="nonzero"
        x="13"
        y="8"
        width="6"
        height="1"
      ></rect>
      <rect
        fill="#494B56"
        fillRule="nonzero"
        x="13"
        y="10"
        width="6"
        height="1"
      ></rect>
    </svg>
  );
}

export function add() {
  return (
    <svg
      className="icon-add"
      width="30px"
      height="23px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#494B56"
        fillRule="nonzero"
        d="M16.5,10 C16.5,10.3122826 16.2470652,10.5652174 15.9347826,10.5652174 L10.5652174,10.5652174 L10.5652174,15.9347826 C10.5652174,16.2467826 10.3122826,16.5 10,16.5 C9.6877174,16.5 9.4347826,16.2467826 9.4347826,15.9347826 L9.4347826,10.5652174 L4.0652174,10.5652174 C3.7529348,10.5652174 3.5,10.3122826 3.5,10 C3.5,9.6877174 3.7529348,9.4347826 4.0652174,9.4347826 L9.4347826,9.4347826 L9.4347826,4.0652174 C9.4347826,3.7529348 9.6877174,3.5 10,3.5 C10.3122826,3.5 10.5652174,3.7529348 10.5652174,4.0652174 L10.5652174,9.4347826 L15.9347826,9.4347826 C16.2470652,9.4347826 16.5,9.6877174 16.5,10 Z"
      ></path>
    </svg>
  );
}

export function embed() {
  return (
    <svg
      className="icon-embed"
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#494B56"
        d="M13.0410996,14.8261802 C12.8030724,15.057835 12.4169249,15.0580448 12.1786821,14.8261802 C11.9404393,14.5943156 11.9406549,14.2185061 12.1786821,13.9868514 L16.275165,10.0000393 L12.1786821,6.01322731 C11.9404393,5.78136272 11.9404393,5.40576303 12.1786821,5.17389844 C12.4169249,4.94203385 12.8028568,4.94203385 13.0410996,5.17389844 L18,10.0000393 L13.0410996,14.8261802 Z"
      ></path>
      <path
        fill="#494B56"
        d="M6.95890041,14.8261802 L2,10.0000393 L6.95890041,5.17389844 C7.19714323,4.94203385 7.58307507,4.94203385 7.82131789,5.17389844 C8.0595607,5.40576303 8.0595607,5.78136272 7.82131789,6.01322731 L3.72483495,10.0000393 L7.82131789,13.9868514 C8.05934511,14.2185061 8.0595607,14.5943156 7.82131789,14.8261802 C7.58307507,15.0580448 7.19692763,15.057835 6.95890041,14.8261802 Z"
      ></path>
    </svg>
  );
}

// TEXT TOOLTIP

export function fontColor() {
  return (
    <svg
      className="icon-fontcolor"
      width="22px"
      height="22px"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        className="icon-fillcolor"
        fillRule="nonzero"
        d="M8.12739586,9.73148148 L10.4359896,4.25925926 L10.2674515,3.85976152 L10.6775092,3.68676844 L10.8505023,3.27671076 L11.25,3.44524887 L11.6494977,3.27671076 L11.8224908,3.68676844 L12.2325485,3.85976152 L12.0640104,4.25925926 L14.3726041,9.73148148 L14.5,9.73148148 L14.5,10.0334569 L15.7325485,12.9550533 L14.3505023,13.5381041 L13.3773959,11.2314815 L9.12260414,11.2314815 L8.14949774,13.5381041 L6.7674515,12.9550533 L8,10.0334569 L8,9.73148148 L8.12739586,9.73148148 Z M9.75541664,9.73148148 L12.7445834,9.73148148 L11.25,6.18876537 L9.75541664,9.73148148 Z"
      ></path>
      <path
        fill="#07A8FF"
        d="M14,15.9259259 L19,15.9259259 C19.5522847,15.9259259 20,16.3736412 20,16.9259259 L20,17 C20,17.5522847 19.5522847,18 19,18 L14,18 L14,15.9259259 Z"
      ></path>
      <rect
        fill="#FFCE0F"
        x="8"
        y="15.9259259"
        width="6"
        height="2.07407407"
      ></rect>
      <path
        fill="#FF2B64"
        d="M3,15.9259259 L8,15.9259259 L8,18 L3,18 C2.44771525,18 2,17.5522847 2,17 L2,16.9259259 C2,16.3736412 2.44771525,15.9259259 3,15.9259259 Z"
      ></path>
    </svg>
  );
}

export function bold() {
  return (
    <svg
      className="icon-bold"
      width="22px"
      height="22px"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="icon-fillcolor"
        fill="currentColor"
        d="M11.2197266,10.546875 C11.9580115,10.546875 12.5322245,10.444337 12.9423828,10.2392578 C13.5869173,9.91699058 13.9091797,9.33691825 13.9091797,8.49902344 C13.9091797,7.65526922 13.5664097,7.08691553 12.8808594,6.79394531 C12.4941387,6.62988199 11.9199257,6.54785156 11.1582031,6.54785156 L8.03808593,6.54785156 L8.03808593,10.546875 L11.2197266,10.546875 Z M11.8085937,16.5058594 C12.8808647,16.5058594 13.6455055,16.1953156 14.1025391,15.5742188 C14.3896499,15.1816387 14.5332031,14.707034 14.5332031,14.1503906 C14.5332031,13.2128859 14.114262,12.5742204 13.2763672,12.234375 C12.8310524,12.0527335 12.2421911,11.9619141 11.5097656,11.9619141 L8.03808593,11.9619141 L8.03808593,16.5058594 L11.8085937,16.5058594 Z M6.32421874,5.08886719 L11.8701172,5.08886719 C13.3818435,5.08886719 14.457028,5.54003455 15.0957031,6.44238281 C15.470705,6.9755886 15.6582031,7.59081683 15.6582031,8.28808594 C15.6582031,9.10254313 15.4267601,9.77050521 14.9638672,10.2919922 C14.7236316,10.5673842 14.3779319,10.8193348 13.9267578,11.0478516 C14.5888705,11.2998059 15.0839827,11.5839828 15.4121094,11.9003906 C15.9921904,12.4628934 16.2822266,13.2392529 16.2822266,14.2294922 C16.2822266,15.0615276 16.021487,15.8144498 15.5,16.4882812 C14.7206992,17.4960988 13.4814538,18 11.7822266,18 L6.32421874,18 L6.32421874,5.08886719 Z"
      ></path>
    </svg>
  );
}

export function italic() {
  return (
    <svg
      className="icon-italic"
      width="22px"
      height="22px"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        className="icon-fillcolor"
        id="I"
        fill="currentColor"
        points="11.5083008 5.08886719 13.2749023 5.08886719 10.5327148 18 8.76611326 18"
      ></polygon>
    </svg>
  );
}

export function insertunorderedlist() {
  return (
    <svg
      className="icon-unorderedlist"
      width="22px"
      height="22px"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="icon-fillcolor"
        fill="currentColor"
        fillRule="nonzero"
        d="M7.5,10.5 L19.5,10.5 C19.776142,10.5 20,10.7238576 20,11 C20,11.2761424 19.776142,11.5 19.5,11.5 L7.5,11.5 C7.223858,11.5 7,11.2761424 7,11 C7,10.7238576 7.223858,10.5 7.5,10.5 Z M4,12 C3.447715,12 3,11.5522847 3,11 C3,10.4477153 3.447715,10 4,10 C4.552285,10 5,10.4477153 5,11 C5,11.5522847 4.552285,12 4,12 Z M7.5,5.5 L19.5,5.5 C19.776142,5.5 20,5.7238576 20,6 C20,6.2761424 19.776142,6.5 19.5,6.5 L7.5,6.5 C7.223858,6.5 7,6.2761424 7,6 C7,5.7238576 7.223858,5.5 7.5,5.5 Z M4,7 C3.447715,7 3,6.5522847 3,6 C3,5.4477153 3.447715,5 4,5 C4.552285,5 5,5.4477153 5,6 C5,6.5522847 4.552285,7 4,7 Z M7.5,15.5 L19.5,15.5 C19.776142,15.5 20,15.7238576 20,16 C20,16.2761424 19.776142,16.5 19.5,16.5 L7.5,16.5 C7.223858,16.5 7,16.2761424 7,16 C7,15.7238576 7.223858,15.5 7.5,15.5 Z M4,17 C3.447715,17 3,16.5522847 3,16 C3,15.4477153 3.447715,15 4,15 C4.552285,15 5,15.4477153 5,16 C5,16.5522847 4.552285,17 4,17 Z"
      ></path>
    </svg>
  );
}

export function insertorderedlist() {
  return (
    <svg
      className="icon-orderedlist"
      width="22px"
      height="22px"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="icon-fillcolor"
        fill="currentColor"
        fillRule="nonzero"
        d="M6.925,9.835 L18.925,9.835 C19.201142,9.835 19.425,10.0588576 19.425,10.335 C19.425,10.6111424 19.201142,10.835 18.925,10.835 L6.925,10.835 C6.648858,10.835 6.425,10.6111424 6.425,10.335 C6.425,10.0588576 6.648858,9.835 6.925,9.835 Z M4.2425,7.335 L3.3825,7.335 L3.3825,5.1 L2.8225,5.665 L2.3325,5.15 L3.4975,4 L4.2425,4 L4.2425,7.335 Z M6.925,4.835 L18.925,4.835 C19.201142,4.835 19.425,5.0588576 19.425,5.335 C19.425,5.6111424 19.201142,5.835 18.925,5.835 L6.925,5.835 C6.648858,5.835 6.425,5.6111424 6.425,5.335 C6.425,5.0588576 6.648858,4.835 6.925,4.835 Z M4.7425,12.335 L2.1275,12.335 L2.1275,11.665 C3.5725,10.62 3.8425,10.39 3.8425,10.055 C3.8425,9.83 3.6275,9.71 3.3825,9.71 C3.0125,9.71 2.7325,9.85 2.4925,10.075 L2.0175,9.505 C2.3725,9.115 2.9025,8.95 3.3675,8.95 C4.1525,8.95 4.7175,9.39 4.7175,10.055 C4.7175,10.57 4.3525,11.005 3.5225,11.585 L4.7425,11.585 L4.7425,12.335 Z M6.925,14.835 L18.925,14.835 C19.201142,14.835 19.425,15.0588576 19.425,15.335 C19.425,15.6111424 19.201142,15.835 18.925,15.835 L6.925,15.835 C6.648858,15.835 6.425,15.6111424 6.425,15.335 C6.425,15.0588576 6.648858,14.835 6.925,14.835 Z M3.38,17.395 C2.74,17.395 2.265,17.17 2,16.87 L2.435,16.285 C2.68,16.52 3.055,16.635 3.345,16.635 C3.715,16.635 3.905,16.495 3.905,16.31 C3.905,16.12 3.765,16.025 3.31,16.025 C3.165,16.025 2.91,16.03 2.86,16.035 L2.86,15.27 C2.925,15.275 3.185,15.275 3.31,15.275 C3.655,15.275 3.85,15.19 3.85,15.015 C3.85,14.805 3.61,14.71 3.29,14.71 C2.985,14.71 2.695,14.82 2.46,15.03 L2.045,14.49 C2.33,14.175 2.765,13.95 3.38,13.95 C4.23,13.95 4.705,14.315 4.705,14.865 C4.705,15.255 4.37,15.55 3.975,15.615 C4.33,15.65 4.76,15.925 4.76,16.405 C4.76,16.99 4.21,17.395 3.38,17.395 Z"
      ></path>
    </svg>
  );
}

export function giphyLogo() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 1 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Page-1" fill="none" fillRule="evenodd">
        <g id="giphy-ar21" transform="translate(-8 -6)">
          <g id="Group" transform="translate(8.569 6.763)">
            <path
              d="M6.68649946,11.474 L9.32049946,11.474 C9.32649946,11.552 9.32649946,11.618 9.32649946,11.708 C9.32649946,13.196 8.18649946,14.09 6.95649946,14.09 C5.61249946,14.09 4.59849946,13.04 4.59849946,11.762 C4.59849946,10.436 5.66649946,9.476 6.97449946,9.476 C8.03649946,9.476 8.94849946,10.19 9.19449946,11.048 L7.92249946,11.048 C7.74849946,10.736 7.42449946,10.472 6.94449946,10.472 C6.38649946,10.472 5.73249946,10.886 5.73249946,11.762 C5.73249946,12.692 6.39249946,13.094 6.95049946,13.094 C7.51449946,13.094 7.89249946,12.812 8.01249946,12.38 L6.68649946,12.38 L6.68649946,11.474 Z M10.2894998,14 L10.2894998,9.56 L11.4234998,9.56 L11.4234998,14 L10.2894998,14 Z M12.6025002,14 L12.6025002,9.56 L15.0265002,9.56 L15.0265002,10.556 L13.6885002,10.556 L13.6885002,11.312 L14.9785002,11.312 L14.9785002,12.308 L13.6885002,12.308 L13.6885002,14 L12.6025002,14 Z"
              id="GIF"
              fill="#00000070"
            />
            <polygon
              id="Path"
              fill="#00000070"
              transform="rotate(-1.52 1.653 11.39)"
              points="0.52516176 2.58609459 2.78104613 2.58609459 2.78104613 20.1949155 0.52516176 20.1949155"
            />
            <polygon
              id="Path"
              fill="#00000070"
              transform="rotate(-1.52 17.506 13.227)"
              points="16.3763287 6.67947428 18.6350224 6.67947428 18.6350224 19.7737175 16.3763287 19.7737175"
            />
            <polygon
              id="Path"
              fill="#00000070"
              transform="rotate(-1.52 9.813 21.107)"
              points="0.78567191 19.9778258 18.841174 19.9778258 18.841174 22.2365195 0.78567191 22.2365195"
            />
            <polygon
              id="Path"
              fill="#00000070"
              transform="rotate(-1.52 5.902 1.342)"
              points="0.259918091 0.212569605 11.544958 0.212569605 11.544958 2.47126329 0.259918091 2.47126329"
            />
            <polygon
              id="Path"
              fill="#00000070"
              points="11.6923919 6.82945814 18.4628543 6.64966162 18.4038586 4.39377726 16.1451649 4.45277299 16.0861692 2.19688863 13.8302848 2.25588436 13.7712891 0 11.5125954 0.0589957305"
            />
            <polygon
              id="Path"
              fill="#00000070"
              transform="rotate(-1.52 17.365 7.809)"
              points="16.2354766 6.67956253 18.4941703 6.67956253 18.4941703 8.93825622 16.2354766 8.93825622"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export function videoRecorderIcon() {
  return (
    <svg width="20px" height="20px" viewBox="0 0 512.001 512.001">
      <path
        fill="#00000070"
        d="M481.086,188.037c-3.454-2.062-7.737-2.159-11.278-0.253l-73.901,39.777v-34.087c0-6.312-5.118-11.429-11.428-11.429 h-18.586c23.179-18.799,38.024-47.493,38.024-79.594C403.918,45.96,357.958,0,301.465,0c-48.218,0-88.757,33.487-99.598,78.424 c-14.182-17.112-35.587-28.032-59.497-28.032c-42.6,0-77.256,34.657-77.256,77.256c0,21.199,8.586,40.426,22.459,54.4H77.138 c-6.312,0-11.429,5.117-11.429,11.429v51.879H36.776c-6.312,0-11.429,5.117-11.429,11.429v44.944 c0,6.312,5.117,11.429,11.429,11.429h28.932v51.879c0,6.312,5.117,11.429,11.429,11.429h134.825l-61.946,118.825 c-2.918,5.596-0.746,12.499,4.851,15.417c1.688,0.88,3.494,1.297,5.273,1.297c4.123,0,8.105-2.239,10.143-6.147l60.523-116.098 l60.524,116.098c2.038,3.91,6.021,6.147,10.144,6.147c1.779,0,3.586-0.417,5.273-1.297c5.597-2.918,7.769-9.821,4.85-15.417 l-61.946-118.825h134.827c6.311,0,11.429-5.117,11.429-11.429v-34.088l73.901,39.777c1.694,0.911,3.555,1.365,5.416,1.365 c2.03,0,4.059-0.541,5.862-1.617c3.454-2.063,5.567-5.789,5.567-9.811V197.848C486.653,193.825,484.54,190.1,481.086,188.037z M65.709,290.297H48.205V268.21h17.504V290.297z M301.465,22.857c43.888,0,79.595,35.706,79.595,79.595 c0,43.889-35.706,79.594-79.595,79.594c-43.888,0-79.594-35.706-79.594-79.594C221.872,58.564,257.578,22.857,301.465,22.857z M214.192,156.054c6.104,9.904,13.847,18.693,22.847,25.992h-39.872C204.476,174.684,210.3,165.855,214.192,156.054z M142.37,73.248c29.995,0,54.399,24.403,54.399,54.399c0,29.996-24.403,54.4-54.399,54.4c-29.995,0-54.399-24.403-54.399-54.4 C87.972,97.651,112.375,73.248,142.37,73.248z M373.05,246.691v65.123v41.79H231.013c-0.021,0-0.041,0-0.062,0h-0.302 c-0.013,0-0.026,0-0.039,0H88.566v-51.879v-44.944v-51.879H373.05V246.691z M463.796,341.529l-67.889-36.542v-51.468 l67.889-36.542V341.529z"
      />
      <path
        fill="#00000070"
        d="M142.37,92.931c-19.143,0-34.716,15.574-34.716,34.716c0,19.143,15.574,34.716,34.716,34.716 c19.143,0,34.716-15.574,34.716-34.716C177.087,108.505,161.513,92.931,142.37,92.931z M142.37,141.791 c-7.8,0-14.145-6.345-14.145-14.145c0-7.8,6.345-14.145,14.145-14.145c7.8,0,14.145,6.345,14.145,14.145 C156.515,135.446,150.169,141.791,142.37,141.791z"
      />
      <path
        fill="#00000070"
        d="M301.465,52.595c-27.491,0-49.856,22.366-49.856,49.857c0,27.49,22.365,49.856,49.856,49.856 c27.491,0,49.856-22.366,49.856-49.856C351.321,74.961,328.957,52.595,301.465,52.595z M301.465,129.451 c-14.887,0-26.999-12.112-26.999-26.999c0-14.887,12.112-27,26.999-27s26.999,12.112,26.999,27S316.352,129.451,301.465,129.451z"
      />
      <path
        fill="#00000070"
        d="M264.593,238.137h-124.26c-5.997,0-10.857,4.861-10.857,10.857v60.519c0,5.997,4.861,10.857,10.857,10.857h124.26 c5.997,0,10.857-4.861,10.857-10.857v-60.519C275.45,242.999,270.589,238.137,264.593,238.137z M253.735,298.656H151.19v-38.804 h102.546V298.656z"
      />
      <circle fill="#00000070" cx="324.536" cy="260.422" r="11.429" />
      <circle fill="#00000070" cx="324.536" cy="298.079" r="11.429" />
    </svg>
  );
}

export function link() {
  return (
    <svg
      className="icon-link"
      width="22px"
      height="22px"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="icon-fillcolor"
        fill="currentColor"
        fillRule="nonzero"
        d="M15.4241733,7 C17.3945268,7 19,8.62962961 19,10.6296296 L19,11.3703704 C19,13.3703704 17.3945268,15 15.4241733,15 L12.7787913,15 C10.8084378,15 9.20296462,13.3703704 9.20296462,11.3703704 L9.20296462,10.2592592 C9.20296462,9.85185179 9.53135687,9.51851846 9.9327252,9.51851846 C10.3340935,9.51851846 10.6624858,9.85185179 10.6624858,10.2592592 L10.6624858,11.3703704 C10.6624858,12.5555555 11.6111745,13.5185185 12.7787913,13.5185185 L15.4241733,13.5185185 C16.5917902,13.5185185 17.5404788,12.5555555 17.5404788,11.3703704 L17.5404788,10.6296296 C17.5404788,9.44444449 16.5917902,8.48148154 15.4241733,8.48148154 L13.5085519,8.48148154 C13.1071835,8.48148154 12.7787913,8.14814821 12.7787913,7.74074077 C12.7787913,7.33333333 13.1071835,7 13.5085519,7 L15.4241733,7 Z M8.85632843,13.5185185 C9.25769662,13.5185185 9.58608887,13.8518518 9.58608887,14.2592592 C9.58608887,14.6666667 9.25769662,15 8.85632843,15 L6.57582666,15 C4.60547319,15 3,13.3703704 3,11.3703704 L3,10.6296296 C3,8.62962961 4.60547319,7 6.57582666,7 L9.58608887,7 C11.5564423,7 13.1619157,8.62962961 13.1619157,10.6296296 L13.1619157,11.7407408 C13.1619157,12.1481482 12.8335234,12.4814815 12.4321551,12.4814815 C12.0307868,12.4814815 11.7023945,12.1481482 11.7023945,11.7407408 L11.7023945,10.6296296 C11.7023945,9.44444449 10.7537058,8.48148154 9.58608887,8.48148154 L6.57582666,8.48148154 C5.40820985,8.48148154 4.45952115,9.44444449 4.45952115,10.6296296 L4.45952115,11.3703704 C4.45952115,12.5555555 5.40820985,13.5185185 6.57582666,13.5185185 L8.85632843,13.5185185 Z"
      ></path>
    </svg>
  );
}

export function close() {
  return (
    <svg
      className="icon-close"
      width="22px"
      height="22px"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="icon-fillcolor"
        fill="currentColor"
        fillRule="nonzero"
        d="M15.8261029,15.8261029 C15.5942402,16.0579657 15.2186434,16.0579657 14.9867807,15.8261029 L11,11.8393223 L7.01321933,15.8261029 C6.78156639,16.0577559 6.40575984,16.0579657 6.17389707,15.8261029 C5.94203431,15.5942402 5.94224413,15.2184336 6.17389707,14.9867807 L10.1606777,11 L6.17389707,7.01321933 C5.94203431,6.78135657 5.94203431,6.40575984 6.17389707,6.17389707 C6.40575984,5.94203431 6.78135657,5.94203431 7.01321933,6.17389707 L11,10.1606777 L14.9867807,6.17389707 C15.2186434,5.94203431 15.5942402,5.94203431 15.8261029,6.17389707 C16.0579657,6.40575984 16.0579657,6.78135657 15.8261029,7.01321933 L11.8393223,11 L15.8261029,14.9867807 C16.0579657,15.2186434 16.0579657,15.5942402 15.8261029,15.8261029 Z"
      ></path>
    </svg>
  );
}

export function blockquote() {
  return (
    <svg
      width="19"
      height="22"
      viewBox="0 0 31 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4,4 L13.597649,4 L13.597649,14.4859813 C13.6427086,15.993777 13.4286787,17.4101699 12.9555528,18.7352025 C12.4824269,20.0602351 11.8178076,21.2253325 10.961675,22.2305296 C10.1055424,23.2357267 9.08045165,24.0695709 7.88637197,24.7320872 C6.69229229,25.3946035 5.39684792,25.8172369 4,26 L4,21.4766355 C5.7122652,20.8826554 6.8837975,20.0031211 7.51463204,18.8380062 C8.14546659,17.6728914 8.46087913,16.245076 8.46087913,14.5545171 L4,14.5545171 L4,4 Z M18.3964736,4 L27.9941226,4 L27.9941226,14.4859813 C28.0391822,15.993777 27.8251523,17.4101699 27.3520264,18.7352025 C26.8789004,20.0602351 26.2142812,21.2253325 25.3581486,22.2305296 C24.502016,23.2357267 23.4769252,24.0695709 22.2828455,24.7320872 C21.0887658,25.3946035 19.7933215,25.8172369 18.3964736,26 L18.3964736,21.4766355 C20.1087388,20.8826554 21.280271,20.0031211 21.9111056,18.8380062 C22.5419401,17.6728914 22.8573527,16.245076 22.8573527,14.5545171 L18.3964736,14.5545171 L18.3964736,4 Z"
        id="”"
        className="icon-fillcolor"
        fill="currentColor"
      />
    </svg>
  );
}

export function code() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 34 31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.512,11.828 L5.236,15.916 L15.512,20.004 L15.512,23.196 L1.288,17.568 L1.288,14.264 L15.512,8.608 L15.512,11.828 Z M19.392,20.004 L29.668,15.916 L19.392,11.828 L19.392,8.608 L33.616,14.264 L33.616,17.568 L19.392,23.196 L19.392,20.004 Z"
        id="&lt;-&gt;"
        className="icon-fillcolor"
        fill="currentColor"
      />
    </svg>
  );
}

export function h1() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 34 31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.932,5.008 L5.328,5.008 L5.328,12.68 L13.42,12.68 L13.42,5.008 L17.816,5.008 L17.816,25 L13.42,25 L13.42,16.376 L5.328,16.376 L5.328,25 L0.932,25 L0.932,5.008 Z M29.1874147,25 L25.2114147,25 L25.2114147,12.288 L20.2834147,12.288 L20.2834147,9.292 C20.9740848,9.31066676 21.6414114,9.25933394 22.2854147,9.138 C22.9294179,9.01666606 23.5080788,8.80200154 24.0214147,8.494 C24.5347506,8.18599846 24.9687462,7.78000252 25.3234147,7.276 C25.6780831,6.77199748 25.9114141,6.1466704 26.0234147,5.4 L29.1874147,5.4 L29.1874147,25 Z"
        id="H1"
        className="icon-fillcolor"
        fill="currentColor"
      />
    </svg>
  );
}

export function h2() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 34 31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.932,5.008 L5.328,5.008 L5.328,12.68 L13.42,12.68 L13.42,5.008 L17.816,5.008 L17.816,25 L13.42,25 L13.42,16.376 L5.328,16.376 L5.328,25 L0.932,25 L0.932,5.008 Z M19.2474147,12.932 C19.2100811,11.8119944 19.3407465,10.7713381 19.6394147,9.81 C19.9380828,8.84866186 20.3860783,8.00867026 20.9834147,7.29 C21.580751,6.57132974 22.3320768,6.01133534 23.2374147,5.61 C24.1427525,5.20866466 25.1834088,5.008 26.3594147,5.008 C27.2554191,5.008 28.1094106,5.1479986 28.9214147,5.428 C29.7334187,5.7080014 30.4474116,6.10933072 31.0634147,6.632 C31.6794177,7.15466928 32.1694128,7.79866284 32.5334147,8.564 C32.8974165,9.32933716 33.0794147,10.1879952 33.0794147,11.14 C33.0794147,12.1293383 32.9207496,12.9786631 32.6034147,13.688 C32.2860797,14.3973369 31.8660839,15.0273306 31.3434147,15.578 C30.8207454,16.1286694 30.2280846,16.6279978 29.5654147,17.076 C28.9027447,17.5240022 28.235418,17.9673311 27.5634147,18.406 C26.8914113,18.8446689 26.2380845,19.3159975 25.6034147,19.82 C24.9687448,20.3240025 24.4087504,20.9119966 23.9234147,21.584 L33.1914147,21.584 L33.1914147,25 L18.7994147,25 C18.7994147,23.8613276 18.9627464,22.8720042 19.2894147,22.032 C19.616083,21.1919958 20.0594119,20.44067 20.6194147,19.778 C21.1794175,19.11533 21.8374109,18.5040028 22.5934147,17.944 C23.3494184,17.3839972 24.1474105,16.8146696 24.9874147,16.236 C25.4167501,15.9373318 25.8740789,15.6340015 26.3594147,15.326 C26.8447504,15.0179985 27.2880793,14.6773352 27.6894147,14.304 C28.09075,13.9306648 28.4267466,13.510669 28.6974147,13.044 C28.9680827,12.577331 29.1034147,12.0453363 29.1034147,11.448 C29.1034147,10.4959952 28.8280841,9.75400266 28.2774147,9.222 C27.7267452,8.68999734 27.0220856,8.424 26.1634147,8.424 C25.5847451,8.424 25.09475,8.55933198 24.6934147,8.83 C24.2920793,9.10066802 23.9700825,9.45533114 23.7274147,9.894 C23.4847468,10.3326689 23.3120818,10.8179973 23.2094147,11.35 C23.1067475,11.8820027 23.0554147,12.4093307 23.0554147,12.932 L19.2474147,12.932 Z"
        id="H2"
        className="icon-fillcolor"
        fill="currentColor"
      />
    </svg>
  );
}

export function h3() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 34 31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.932,5.008 L5.328,5.008 L5.328,12.68 L13.42,12.68 L13.42,5.008 L17.816,5.008 L17.816,25 L13.42,25 L13.42,16.376 L5.328,16.376 L5.328,25 L0.932,25 L0.932,5.008 Z M24.5954147,13.324 C25.0247501,13.3613335 25.4820789,13.3613335 25.9674147,13.324 C26.4527504,13.2866665 26.9054126,13.1793342 27.3254147,13.002 C27.7454168,12.8246658 28.0907466,12.5680017 28.3614147,12.232 C28.6320827,11.8959983 28.7674147,11.4480028 28.7674147,10.888 C28.7674147,10.0479958 28.4874175,9.40400224 27.9274147,8.956 C27.3674119,8.50799776 26.7234183,8.284 25.9954147,8.284 C24.9874096,8.284 24.2267506,8.61533002 23.7134147,9.278 C23.2000788,9.94066998 22.9527479,10.775995 22.9714147,11.784 L19.1914147,11.784 C19.2287482,10.775995 19.4107464,9.85667082 19.7374147,9.026 C20.064083,8.19532918 20.5214117,7.48133632 21.1094147,6.884 C21.6974176,6.28666368 22.4020772,5.8246683 23.2234147,5.498 C24.0447521,5.1713317 24.9594096,5.008 25.9674147,5.008 C26.7514186,5.008 27.5354107,5.1246655 28.3194147,5.358 C29.1034186,5.5913345 29.8080782,5.941331 30.4334147,6.408 C31.0587511,6.874669 31.5674127,7.44399664 31.9594147,8.116 C32.3514166,8.78800336 32.5474147,9.56266228 32.5474147,10.44 C32.5474147,11.3920048 32.3187503,12.2319964 31.8614147,12.96 C31.404079,13.6880036 30.7180859,14.1826654 29.8034147,14.444 L29.8034147,14.5 C30.8860867,14.7426679 31.7354116,15.2653293 32.3514147,16.068 C32.9674177,16.8706707 33.2754147,17.8319944 33.2754147,18.952 C33.2754147,19.9786718 33.07475,20.8933293 32.6734147,21.696 C32.2720793,22.4986707 31.735418,23.170664 31.0634147,23.712 C30.3914113,24.253336 29.6167524,24.6639986 28.7394147,24.944 C27.8620769,25.2240014 26.9474194,25.364 25.9954147,25.364 C24.8940758,25.364 23.8907525,25.2053349 22.9854147,24.888 C22.0800768,24.5706651 21.3100845,24.1086697 20.6754147,23.502 C20.0407448,22.8953303 19.5507497,22.1533377 19.2054147,21.276 C18.8600796,20.3986623 18.6967479,19.3906724 18.7154147,18.252 L22.4954147,18.252 C22.5140814,18.7746693 22.5980806,19.2739976 22.7474147,19.75 C22.8967487,20.2260024 23.1114133,20.6366649 23.3914147,20.982 C23.6714161,21.3273351 24.0214126,21.6026656 24.4414147,21.808 C24.8614168,22.0133344 25.3607451,22.116 25.9394147,22.116 C26.8354191,22.116 27.5914116,21.8406694 28.2074147,21.29 C28.8234177,20.7393306 29.1314147,19.9880048 29.1314147,19.036 C29.1314147,18.2893296 28.9867494,17.720002 28.6974147,17.328 C28.4080799,16.935998 28.0394169,16.6513342 27.5914147,16.474 C27.1434124,16.2966658 26.6534173,16.1940001 26.1214147,16.166 C25.589412,16.1379999 25.0807504,16.124 24.5954147,16.124 L24.5954147,13.324 Z"
        id="H3"
        className="icon-fillcolor"
        fill="currentColor"
      />
    </svg>
  );
}

export function h4() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 34 31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.932,5.008 L5.328,5.008 L5.328,12.68 L13.42,12.68 L13.42,5.008 L17.816,5.008 L17.816,25 L13.42,25 L13.42,16.376 L5.328,16.376 L5.328,25 L0.932,25 L0.932,5.008 Z M26.9474147,10.384 L26.8634147,10.384 L21.7954147,17.188 L26.9474147,17.188 L26.9474147,10.384 Z M26.9474147,20.464 L18.6594147,20.464 L18.6594147,16.824 L27.1714147,5.4 L30.7274147,5.4 L30.7274147,17.188 L33.3314147,17.188 L33.3314147,20.464 L30.7274147,20.464 L30.7274147,25 L26.9474147,25 L26.9474147,20.464 Z"
        id="H4"
        className="icon-fillcolor"
        fill="currentColor"
      />
    </svg>
  );
}

export default {
  imageWide,
  imageLeft,
  imageCenter,
  imageFill,
  image,
  card,
  video,
  divider,
  button,
  add,
  embed,
  fontColor,
  bold,
  italic,
  insertunorderedlist,
  insertorderedlist,
  link,
  close,
  h1,
  h2,
  h3,
  h4,
  blockquote,
  code,
};
