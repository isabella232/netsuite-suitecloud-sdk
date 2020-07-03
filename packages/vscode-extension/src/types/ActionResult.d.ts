/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.  All rights reserved.
 ** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

export interface ActionResult<T> {
	status: string;
	resultMessage: string;
	errorMessages: string[];
	data: T;
}

export interface AuthenticateActionResult extends ActionResult<undefined> {
	mode: string;
	authId: string;
	accountInfo: {
		companyName: string;
		roleName: string;
	};
}

export type AuthListData = {
	[key: string]: {
		accountInfo: {
			companyName: string;
			roleId: number;
			roleName: string;
			entityId: number;
			companyId: string;
		},
		token:{
			tokenId: string;
			tokenSecret: string;
		},
		developmentMode: boolean;
		urls:{
			app: string;
		}
	},
}