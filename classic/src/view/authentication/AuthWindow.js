/**
 * conjoon
 * (c) 2007-2017 conjoon.org
 * licensing@conjoon.org
 *
 * app-cn_user
 * Copyright (C) 2017 Thorsten Suckow-Homberg/conjoon.org
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Authentication LockingWindow to present a login form. The form used within
 * the window is an instance of {@link conjoon.cn_user.view.authentication.AuthForm}.
 *
 *      @example
 *      Ext.create('conjoon.cn_user.view.authentication.AuthWindow', {
 *
 *      });
 *
 */
Ext.define('conjoon.cn_user.view.authentication.AuthWindow', {

    extend: 'conjoon.cn_comp.window.LockingWindow',

    alias: 'widget.cn_user-authwindow',

    requires: [
        'conjoon.cn_user.view.authentication.AuthForm'
    ],

    defaultFocus : 'cn_user-authform', // force focus on authform

    bodyCls: 'cn_user-authwindow',

    /**
     * @type {String}
     * @i18n_text
     */
    title : 'Log in',

    layout : {
        type  : 'vbox',
        align : 'center',
        pack  : 'center'
    },

    items : [{
        xtype : 'cn_user-authform'
    }],

    listeners : {
        afterrender : 'onWindowAfterRender'
    },

    privates : {

        /**
         * @private
         */
        onWindowAfterRender : function() {
            var me = this;

            // Relay events from the AuthForm
            me.relayEvents(me.down('cn_user-authform'), [
            /**
             * @event cn_user-authrequest
             * @inheritdoc conjoon.cn_user.view.authentication.AuthForm#cn_user-authrequest
             */
                'cn_user-authrequest'
            ]);
        }
    }

});
