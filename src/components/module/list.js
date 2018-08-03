import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class List extends React.Component{
  render(){
    return(
      <main>
        <ul className="table" data-type="block">
          <li>
            <figure>
              <Link to="">
                <img src="https://i.kfs.io/album/global/34984515,0v1/fit/500x500.jpg" alt="不愛我就拉倒" title="不愛我就拉倒"/>
              </Link>
              <figcaption>
                <h3>不愛我就拉倒</h3>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <Link to="">
                <img src="https://i.kfs.io/album/global/34984515,0v1/fit/500x500.jpg" alt="不愛我就拉倒" title="不愛我就拉倒"/>
              </Link>
              <figcaption>
                <h3>不愛我就拉倒</h3>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <Link to="">
                <img src="https://i.kfs.io/album/global/34984515,0v1/fit/500x500.jpg" alt="不愛我就拉倒" title="不愛我就拉倒"/>
              </Link>
              <figcaption>
                <h3>不愛我就拉倒</h3>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <Link to="">
                <img src="https://i.kfs.io/album/global/34984515,0v1/fit/500x500.jpg" alt="不愛我就拉倒" title="不愛我就拉倒"/>
              </Link>
              <figcaption>
                <h3>不愛我就拉倒</h3>
              </figcaption>
            </figure>
          </li>
        </ul>
      </main>
    );
  }
}
