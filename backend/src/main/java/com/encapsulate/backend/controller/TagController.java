package com.encapsulate.backend.controller;
import java.util.List;

import com.encapsulate.backend.model.Tag;
import com.encapsulate.backend.repository.TagRepository;
import com.encapsulate.backend.service.TagService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController         // Required to specify that this class is a controller
@RequestMapping("/tags")   // Specifies the endpoint
public class TagController {
    private TagService tag;
    private TagRepository tagRepository;

    public void tagController(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
      
    }


    // @GetMapping
    // public List<Tag> getTags() {
    //     return TagRepository.findAll();
    // }

    // @GetMapping("/{id}")
    // public Client getClient(@PathVariable Long id) {
    //     return clientRepository.findById(id).orElseThrow(RuntimeException::new);
    // }

    // @PostMapping
    // public ResponseEntity createClient(@RequestBody Client client) throws URISyntaxException {
    //     Client savedClient = clientRepository.save(client);
    //     return ResponseEntity.created(new URI("/clients/" + savedClient.getId())).body(savedClient);
    // }

    // @PutMapping("/{id}")
    // public ResponseEntity updateClient(@PathVariable Long id, @RequestBody Client client) {
    //     Client currentClient = clientRepository.findById(id).orElseThrow(RuntimeException::new);
    //     currentClient.setName(client.getName());
    //     currentClient.setEmail(client.getEmail());
    //     currentClient = clientRepository.save(client);

    //     return ResponseEntity.ok(currentClient);
    // }

    // @DeleteMapping("/{id}")
    // public ResponseEntity deleteClient(@PathVariable Long id) {
    //     clientRepository.deleteById(id);
    //     return ResponseEntity.ok().build();
    // }
}
