# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

## Check Your Understanding

1) I would not rely only on a unit test for a full "message" feature. Sending a message depends on multiple pieces working together (input UI, network request, backend response, storage, and rendering), so this is better covered with integration/end-to-end tests, with unit tests only for smaller helper logic.

2) Yes, I would use unit tests for "max message length." This is a focused rule with clear inputs and outputs (allow/disallow text over 80 chars), which is exactly what unit tests are best at and easy to verify quickly with many edge cases.
