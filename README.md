# Instagram clone

Based on a [freeCodeCamp tutorial](https://www.youtube.com/watch?v=RMScMwY2B6Q) by [@asaprogrammer_](https://www.youtube.com/@asaprogrammer_/videos)

## Goals

- To see how someone more experienced would structure this kind of project.
- Start playing around with backend tech (Firebase).

## Conclusions

### General
Not directly project related, but because the tutorial was so long, it cemented to me that follow along tutorials are definitely not my thing. The amount of time spent versus lessons learned and the depth of the learning were terribly unproductive when compared to other approaches I've taken to learning. This is not a dig at the creator. The material was very well structured and easy to follow.

However, I did find some benefits to the approach. Since you're often building similar components and hooks, the rote memorization kicked in even when I was half zoned out. By the end of the project, I noticed a big difference in the amount of mistakes I made following along and the ease of identifying the code being worked on when compared to the starting point. Took me back to writing down a text being read aloud by a school teacher. Again, not my preferred approach, but I felt the difference.

Finally, I think it reeinforced in me, via concrete cases, the need to always be bit paranoid with how you write code to handle the unexpected. A project like this relies on a lot of reusable code, and it's not even at the full complexity of actual Instagram. Lots of opportunities for each small change to have widespread repercussions, so best make it easy to debug things.

### Structure
Funnily enough, the actual project folder and file struture, naming conventions, etc. was the thing that less diverged from what I already knew, so a few other "unknown unknowns" left more of a mark.

I hadn't built a project with this much of an extensive use of custom hooks and it was great practice to internalize concrete examples of how to use them to avoid repetition and abstract away complexity when dealing with APIs.

Additionally, seeing how the relationship between local state and Firebase storage was handled was also interesting. Observing a project like this from "afar", it's incredible the amount of complexity that is introduced by the fact you need holding patterns everywhere to deal with async calls. Definitely gave me a few ideias to abstract that kind of code even more.

### Firebase
Unfortunately the project didn't need to delve too deeply into Firebase, which might actually speak to how easy it is to setup. A very limited glimpse into backend data structures and rules. Probably just enough to have a sense of the intricate logic mind palaces you need to conjure when doing it all from scratch.

### Chakra UI
Felt like using Material UI components with inbuilt functionality but customizing them similarly to Tailwind, except using props instead of classes.

### Zustand
My main experience of state management being Redux, I really loved how Zustand gets out of your way. Will definitely try it out more in the future.
