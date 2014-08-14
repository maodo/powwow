(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([ 'dejavu/Interface' ], factory);
	}
	else {
		root.powwow.hub.Hub = factory(root.dejavu.Interface);
	}
}(this, function(Interface) {

	'use strict';

	var Hub = Interface.declare({

		$name : 'Hub',

		/**
		 * Publish an event on a topic
		 * 
		 * @param {String}
		 *            topic A valid topic string. MUST NOT include wildcards.
		 * @param {*}
		 *            data Valid publishable data. To be portable across
		 *            different Container implementations, this value SHOULD be
		 *            serializable as JSON.
		 * 
		 * @throws {OpenAjax.hub.Error.Disconnected}
		 *             if this Hub instance is not in CONNECTED state
		 * @throws {OpenAjax.hub.Error.BadParameters}
		 *             if the topic cannot be published (e.g. contains wildcards
		 *             or empty tokens) or if the data cannot be published (e.g.
		 *             cannot be serialized as JSON)
		 */
		publish : function(topic, data) {
		},

		/**
		 * Subscribe to a topic.
		 * 
		 * @param {String}
		 *            topic A valid topic string. MAY include wildcards.
		 * @param {Function}
		 *            onData Callback function that is invoked whenever an event
		 *            is published on the topic
		 * @param {Object}
		 *            [scope] When onData callback or onComplete callback is
		 *            invoked, the JavaScript "this" keyword refers to this
		 *            scope object. If no scope is provided, default is window.
		 * @param {Function}
		 *            [onComplete] Invoked to tell the client application
		 *            whether the subscribe operation succeeded or failed.
		 * @param {*}
		 *            [subscriberData] Client application provides this data,
		 *            which is handed back to the client application in the
		 *            subscriberData parameter of the onData callback function.
		 * 
		 * @returns subscriptionID Identifier representing the subscription.
		 *          This identifier is an arbitrary ID string that is unique
		 *          within this Hub instance
		 * @type {String}
		 * 
		 * @throws {OpenAjax.hub.Error.Disconnected}
		 *             if this Hub instance is not in CONNECTED state
		 * @throws {OpenAjax.hub.Error.BadParameters}
		 *             if the topic is invalid (e.g. contains an empty token)
		 */
		subscribe : function(topic, onData, scope, onComplete, subscriberData) {
		},

		/**
		 * Unsubscribe from a subscription
		 * 
		 * @param {String}
		 *            subscriptionID A subscriptionID returned by
		 *            Hub.subscribe()
		 * @param {Function}
		 *            [onComplete] Callback function invoked when unsubscribe
		 *            completes
		 * @param {Object}
		 *            [scope] When onComplete callback function is invoked, the
		 *            JavaScript "this" keyword refers to this scope object. If
		 *            no scope is provided, default is window.
		 * 
		 * @throws {OpenAjax.hub.Error.Disconnected}
		 *             if this Hub instance is not in CONNECTED state
		 * @throws {OpenAjax.hub.Error.NoSubscription}
		 *             if no such subscription is found
		 */
		unsubscribe : function(subscriptionID, onComplete, scope) {
		},

		/**
		 * Return true if this Hub instance is in the Connected state. Else
		 * returns false.
		 * 
		 * This function can be called even if the Hub is not in a CONNECTED
		 * state.
		 * 
		 * @returns Boolean
		 * @type {Boolean}
		 */
		isConnected : function() {
		},

		/**
		 * Returns the scope associated with this Hub instance and which will be
		 * used with callback functions.
		 * 
		 * This function can be called even if the Hub is not in a CONNECTED
		 * state.
		 * 
		 * @returns scope object
		 * @type {Object}
		 */
		getScope : function() {
		},

		/**
		 * Returns the subscriberData parameter that was provided when
		 * Hub.subscribe was called.
		 * 
		 * @param {String}
		 *            subscriptionID The subscriberID of a subscription
		 * 
		 * @returns subscriberData
		 * @type {*}
		 * 
		 * @throws {OpenAjax.hub.Error.Disconnected}
		 *             if this Hub instance is not in CONNECTED state
		 * @throws {OpenAjax.hub.Error.NoSubscription}
		 *             if there is no such subscription
		 */
		getSubscriberData : function(subscriptionID) {
		},

		/**
		 * Returns the scope associated with a specified subscription. This
		 * scope will be used when invoking the 'onData' callback supplied to
		 * Hub.subscribe().
		 * 
		 * @param {String}
		 *            subscriberID The subscriberID of a subscription
		 * 
		 * @returns scope
		 * @type {*}
		 * 
		 * @throws {OpenAjax.hub.Error.Disconnected}
		 *             if this Hub instance is not in CONNECTED state
		 * @throws {OpenAjax.hub.Error.NoSubscription}
		 *             if there is no such subscription
		 */
		getSubscriberScope : function(subscriberID) {
		},

		/**
		 * Returns the params object associated with this Hub instance.
		 * 
		 * @returns params The params object associated with this Hub instance
		 * @type {Object}
		 */
		getParameters : function() {
		}

	});

	return Hub;

}));