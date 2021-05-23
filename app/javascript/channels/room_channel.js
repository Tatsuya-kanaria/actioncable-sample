import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {

  },

  disconnected() {

  },

  received(data) {
    alert(data['message']);
  },

  speak: function (message) {
    return this.perform('speak', { message: message });
  }
});
