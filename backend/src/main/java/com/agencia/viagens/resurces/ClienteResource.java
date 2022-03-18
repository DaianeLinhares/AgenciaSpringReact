package com.agencia.viagens.resurces;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agencia.viagens.entities.Cliente;
import com.agencia.viagens.services.ClienteService;

@RestController
@RequestMapping(value = "/clientes")
public class ClienteResource {

	@Autowired
	private ClienteService service;

	@PostMapping
	public Cliente saveCliente(@RequestBody Cliente cliente) {
		return service.saveCliente(cliente);
	}
	
	@GetMapping
	public List<Cliente> findAll() {
		return service.findAll();
	}
}