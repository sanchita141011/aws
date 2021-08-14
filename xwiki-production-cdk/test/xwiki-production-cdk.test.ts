/*
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */
import { SynthUtils } from '@aws-cdk/assert';
import { App } from '@aws-cdk/core';
import * as cdk from '@aws-cdk/core';
import { region } from '../lib/config'
import {XWikiProductionStacks} from '../lib/stacks/xwiki-stacks';
import {XWikiVpc} from '../lib/stacks/vpc';

const app = new App()

const env = {
  region: region
}

const xwikivpc = new XWikiVpc(app, 'xwiki-prod-vpc', {
  env: env

})
const stack = new XWikiProductionStacks(app, 'xwiki-stack', {
  vpc: xwikivpc.xwikivpc,
  env:env
})


