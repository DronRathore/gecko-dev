/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

package org.mozilla.gecko.overlays.ui;

import android.content.Context;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import org.mozilla.gecko.R;

/**
 * Static helper class for generating toasts for share events.
 *
 * The overlay toasts come in a variety of flavours: success (rectangle with happy green tick,
 * failure (no tick, a retry button), and success-with-tutorial (as success, but with a pretty
 * picture of some description to educate the user on how to use the feature) TODO: Bug 1048645.
 */
public class OverlayToastHelper {
    /**
     * Show a toast indicating a failure to share.
     * @param context Context in which to inflate the toast.
     * @param failureMessage String to display in the toast.
     * @param isTransient Should a retry button be presented?
     * @param retryListener Listener to fire when the retry button is pressed.
     */
    public static void showFailureToast(Context context, String failureMessage, boolean isTransient, View.OnClickListener retryListener) {
        showToast(context, failureMessage, isTransient, retryListener);
    }
    public static void showFailureToast(Context context, String failureMessage, boolean isTransient) {
        showFailureToast(context, failureMessage, isTransient, null);
    }

    /**
     * Show a toast indicating a successful share.
     * @param successMesssage Message to show in the toast.
     */
    public static void showSuccessToast(Context context, String successMesssage) {
        showToast(context, successMesssage, false, null);
    }

    private static void showToast(Context context, String message, boolean withRetry, View.OnClickListener retryListener) {
    }
}
