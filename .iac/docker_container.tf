# Pulls the image
resource "docker_image" "midowe_image" {
  name = var.image_tag
}

# Create the container
resource "docker_container" "midowe_container" {
  image = docker_image.midowe_image
  name  = local.resource_prefix

  ports {
    internal = "3000"
    external = var.container_port
  }
}
