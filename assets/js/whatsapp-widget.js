(function () {
    'use strict';

    var WHATSAPP_NUMBER = '254717551542'; // 0717 551 542 in international format

    document.addEventListener('DOMContentLoaded', function () {
        var toggle = document.getElementById('waToggle');
        var overlay = document.getElementById('waModalOverlay');
        var closeBtn = document.getElementById('waModalClose');
        var form = document.getElementById('waMessageForm');
        var textarea = document.getElementById('waMessageInput');

        if (!toggle || !overlay || !form || !textarea) return;

        function openModal() {
            overlay.removeAttribute('hidden');
            textarea.focus();
        }

        function closeModal() {
            overlay.setAttribute('hidden', '');
        }

        toggle.addEventListener('click', openModal);

        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) closeModal();
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && !overlay.hasAttribute('hidden')) closeModal();
        });

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var message = textarea.value.trim();
            if (!message) {
                textarea.focus();
                return;
            }
            var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
            window.open(url, '_blank', 'noopener');
            form.reset();
            closeModal();
        });
    });
})();
