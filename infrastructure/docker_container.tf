data "docker_registry_image" "midowe" {
  name = var.image_tag
}

# Pulls the image
resource "docker_image" "midowe_image" {
  name          = data.docker_registry_image.midowe.name
  pull_triggers = [data.docker_registry_image.midowe.sha256_digest]
}

# Create the container
resource "docker_container" "midowe_container" {
  image   = docker_image.midowe_image.name
  name    = local.resource_prefix
  restart = "always"

  env = ["RUN_ENV=${var.environment}"]

  ports {
    internal = "3000"
    external = var.container_port
  }
}
