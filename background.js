// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.webNavigation.onCommitted.addListener(details => {
  chrome.history.deleteUrl({url: details.url.split('#')[0]});
}, {url: [{hostEquals: 'www.pornhub.com'}]});

chrome.webNavigation.onCompleted.addListener(details => {
  chrome.history.deleteUrl({url: details.url});
}, {url: [{hostEquals: 'www.pornhub.com'}]});

chrome.webNavigation.onCommitted.addListener(details => {
  chrome.history.deleteUrl({url: details.url.split('#')[0]});
}, {url: [{hostEquals: 'www.xvideos.com'}]});

chrome.webNavigation.onCompleted.addListener(details => {
  chrome.history.deleteUrl({url: details.url});
}, {url: [{hostEquals: 'www.xvideos.com'}]});

chrome.webNavigation.onCommitted.addListener(details => {
  chrome.history.deleteUrl({url: details.url.split('#')[0]});
}, {url: [{hostEquals: 'xhamster.com'}]});

chrome.webNavigation.onCompleted.addListener(details => {
  chrome.history.deleteUrl({url: details.url});
}, {url: [{hostEquals: 'xhamster.com'}]});

chrome.webNavigation.onCommitted.addListener(details => {
  chrome.history.deleteUrl({url: details.url.split('#')[0]});
}, {url: [{hostEquals: 'www.xnxx.com'}]});

chrome.webNavigation.onCompleted.addListener(details => {
  chrome.history.deleteUrl({url: details.url});
}, {url: [{hostEquals: 'www.xnxx.com'}]});

chrome.webNavigation.onCommitted.addListener(details => {
  chrome.history.deleteUrl({url: details.url.split('#')[0]});
}, {url: [{hostEquals: 'www.youporn.com'}]});

chrome.webNavigation.onCompleted.addListener(details => {
  chrome.history.deleteUrl({url: details.url});
}, {url: [{hostEquals: 'www.youporn.com'}]});


